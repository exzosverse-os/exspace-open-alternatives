import redis from '@/lib/redis';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const value = await redis.get('myKey');
    return NextResponse.json({ value });
  } catch (error) {
    console.error('Redis GET error:', error);
    return NextResponse.json({ error: 'Failed to get value from Redis' }, { status: 500 });
  }
}

export async function POST() {
  try {
    await redis.set('key', 'value');
    const value = await redis.get('key');
    return NextResponse.json({ result: value });
  } catch (error) {
    console.error('Redis POST error:', error);
    return NextResponse.json({ error: 'Failed to set/get value in Redis' }, { status: 500 });
  }
}