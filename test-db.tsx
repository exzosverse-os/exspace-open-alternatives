import { neon } from '@neondatabase/serverless';

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    try {
      // Connect to the Neon database
      const sql = neon(`${process.env.DATABASE_URL}`);
      const comment = formData.get('comment');
      // Insert the comment from the form into the Postgres database
      await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
      console.log('Comment inserted successfully');
    } catch (error) {
      console.error('Error inserting comment:', error);
    }
  }

  return (
    <form action={create}>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}