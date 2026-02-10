import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
// Static imports to ensure Vercel bundles these files
import { db } from './_db';
import { projects } from './_schema';

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

    // Try Drizzle select
    let drizzleResult = null;
    let drizzleError = null;
    try {
      drizzleResult = await db.select().from(projects).limit(2);
    } catch (e) {
      drizzleError = String(e);
    }

    return res.status(200).json({
      status: 'success',
      tableExists: tableExists[0].exists,
      columns,
      rawProjectsCount: rawProjects.length,
      drizzleSuccess: !!drizzleResult,
      drizzleError,
      drizzleResult
    });

  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: String(error)
    });
  }
}
