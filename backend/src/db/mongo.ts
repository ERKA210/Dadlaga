import { MongoClient, Db } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

let db: Db;

export const connectDB = async (): Promise<Db> => {
  if (!db) {
    await client.connect();
    db = client.db('Internship');
    console.log('✅ MongoDB connected');
  }
  return db;
};
