import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    
    // Check if table exists
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'projects'
      );
    `;

    // Get column info
    const columns = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'projects';
    `;

    // Try raw select
    const rawProjects = await sql`SELECT * FROM projects LIMIT 5`;

    return res.status(200).json({
      status: 'success',
      tableExists: tableExists[0].exists,
      columns,
      rawProjects
    });

  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: String(error)
    });
  }
}
