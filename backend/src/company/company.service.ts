import { Injectable } from '@nestjs/common';
import { connectDB } from '../db/mongo';

@Injectable()
export class CompanyService {
  private collectionName = 'companies';

  async findAll() {
    const db = await connectDB();
    return db.collection(this.collectionName).find().toArray();
  }

  async create(company: any) {
    const db = await connectDB();
    const result = await db.collection(this.collectionName).insertOne(company);
    return result;
  }
}
