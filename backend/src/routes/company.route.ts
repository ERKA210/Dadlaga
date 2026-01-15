import { Router } from 'express';
import { connectDB } from '../db/mongo';

const router = Router();

// 👉 GET – өгөгдөл авах
router.get('/', async (req, res) => {
  const db = await connectDB();
  const companies = await db.collection('Company').find().toArray();
  res.json(companies);
});

// 👉 POST – өгөгдөл оруулах
router.post('/', async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { name, email } = req.body;
  const db = await connectDB();

  await db.collection('Company').insertOne({
    name,
    email,
    createdAt: new Date(),
  });

  res.json({ success: true });
});

export default router;
