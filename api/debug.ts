import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const url = process.env.DATABASE_URL;
    
    // Mask the password in the URL for security
    const maskedUrl = url ? url.replace(/:[^:@]+@/, ':***@') : 'undefined';

    const debugInfo = {
      hasUrl: !!url,
      urlPrefix: maskedUrl.split('@')[1] || 'unknown', // Log only the host part
      nodeEnv: process.env.NODE_ENV,
    };

    if (!url) {
      return res.status(500).json({ 
        status: 'error', 
        message: 'DATABASE_URL is missing', 
        debugInfo 
      });
    }

    try {
      const sql = neon(url);
      const startTime = Date.now();
      const [result] = await sql`SELECT now()`;
      const duration = Date.now() - startTime;

      return res.status(200).json({
        status: 'success',
        message: 'Database connection successful',
        timestamp: result.now,
        duration: `${duration}ms`,
        debugInfo
      });
    } catch (dbError) {
      return res.status(500).json({
        status: 'error',
        message: 'Database connection failed',
        error: String(dbError),
        debugInfo
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Unexpected error',
      error: String(error)
    });
  }
}
