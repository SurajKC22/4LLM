import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

// Interface for the mongoose connection cache
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Declare global type for mongoose
declare global {
  var mongoose: MongooseConnection; // This must be var and not let or const
}

// Use global mongoose cache, or initialize it if it doesn't exist
let cached: MongooseConnection = global.mongoose || { conn: null, promise: null };

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async (): Promise<Mongoose> => {
  // If a connection is already cached, return it
  if (cached.conn) return cached.conn;

  // If MONGODB_URL is not set in the environment, throw an error
  if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  // If no promise is cached, start a new connection promise
  cached.promise = cached.promise || mongoose.connect(MONGODB_URL, { 
    dbName: '4LLLM', bufferCommands: false 
  });

  // Wait for the connection promise to resolve, then cache the connection
  cached.conn = await cached.promise;

  return cached.conn;
};
