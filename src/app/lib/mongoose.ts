// app/lib/mongoose.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(process.env.mongoUrl || '');
};

export default connectDB;
