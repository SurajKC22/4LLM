import mongoose, { Connection } from 'mongoose';
import type { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

interface GlobalThisWithMongoose extends Record<string, unknown> {
  mongoose: MongooseConnection;
}

let cached: MongooseConnection = ((globalThis as unknown as GlobalThisWithMongoose).mongoose as MongooseConnection) || { conn: null, promise: null };

if (!cached) {
  cached = (globalThis as unknown as GlobalThisWithMongoose).mongoose = { 
    conn: null, 
    promise: null 
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: '4LLLM', 
      bufferCommands: false 
    });

  cached.conn = await cached.promise;

  return cached.conn;
};