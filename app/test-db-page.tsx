import postgres from 'postgres';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.development.local' });

let sql: any = null;

try {
  if (process.env.DATABASE_URL) {
    sql = postgres(process.env.DATABASE_URL, { ssl: 'verify-full' });
  }
} catch (error) {
  console.error('Failed to connect to database:', error);
}

export default function Page() {
  async function create(formData: FormData) {
    'use server';

    if (!sql) {
      console.error('Database not connected');
      return;
    }

    try {
      const comment = formData.get('comment');

      // Create table if it doesn't exist
      await sql`CREATE TABLE IF NOT EXISTS comments (id SERIAL PRIMARY KEY, comment TEXT, created_at TIMESTAMP DEFAULT NOW())`;

      // Insert the comment
      await sql`INSERT INTO comments (comment) VALUES (${comment})`;

      console.log('Comment inserted successfully');
    } catch (error) {
      console.error('Error inserting comment:', error);
    }
  }

  async function getComments() {
    'use server';

    if (!sql) {
      return [];
    }

    try {
      const comments = await sql`SELECT * FROM comments ORDER BY created_at DESC`;
      return comments;
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Test</h1>

      <form action={create} className="mb-8">
        <input
          type="text"
          placeholder="Write a comment"
          name="comment"
          className="border p-2 mr-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">Comments:</h2>
        {/* We'll add comment display later */}
      </div>
    </div>
  );
}