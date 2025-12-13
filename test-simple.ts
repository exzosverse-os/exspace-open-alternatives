import postgres from 'postgres';
import { config } from 'dotenv';

// Load environment variables from .env.development.local
config({ path: '.env.development.local' });

async function testConnection() {
  try {
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');

    const sql = postgres(process.env.DATABASE_URL!, { ssl: 'verify-full' });

    console.log('Attempting to connect...');
    const result = await sql`SELECT NOW()`;
    console.log('Database connection successful:', result);

    await sql.end();
    console.log('Connection closed successfully');
  } catch (error) {
    console.error('Database operation failed:', error);
  }
}

testConnection();