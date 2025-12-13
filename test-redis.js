import { config } from 'dotenv';
config({ path: '.env.local' });

import { createClient } from 'redis';

console.log('REDIS_URL:', process.env.REDIS_URL);

const redis = createClient({ url: process.env.REDIS_URL });

async function test() {
  try {
    await redis.connect();
    console.log('Connected to Redis');
    await redis.set('test', 'hello');
    const value = await redis.get('test');
    console.log('Value:', value);
    await redis.disconnect();
    console.log('Disconnected');
  } catch (error) {
    console.error('Error:', error);
  }
}

test();