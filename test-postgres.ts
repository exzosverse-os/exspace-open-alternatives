import postgres from 'postgres';
import { config } from 'dotenv';

// Load environment variables from .env.development.local
config({ path: '.env.development.local' });

async function testConnection() {
  try {
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
    console.log('DATABASE_URL value:', process.env.DATABASE_URL);

    const sql = postgres(process.env.DATABASE_URL!, { ssl: 'verify-full' });

    const result = await sql`SELECT NOW()`;
    console.log('Database connection successful:', result);

    // Test creating table if it doesn't exist
    await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
    console.log('Table created successfully');

    // Test inserting data
    const comment = 'Test comment from postgres.js';
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;
    console.log('Data inserted successfully');

    // Test selecting data
    const comments = await sql`SELECT * FROM comments`;
    console.log('Comments:', comments);

    await sql.end();
  } catch (error) {
    console.error('Database operation failed:', error);
  }
}

testConnection();