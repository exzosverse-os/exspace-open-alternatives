import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

async function testConnection() {
  try {
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
    const sql = neon(process.env.DATABASE_URL!);
    const result = await sql('SELECT NOW()');
    console.log('Database connection successful:', result);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

testConnection();