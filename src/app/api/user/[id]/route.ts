// app/api/user/[id]/route.ts
import { NextResponse } from 'next/server';
import {connect} from '@/dbconfig/dbconfig'; // Assuming you have a MongoDB connection utility
import User from '@/models/User'; // Your Mongoose User model

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  
  await connect();

  // Fetch the user by ID
  const user = await User.findById(id);
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  
  await connect();

  // Delete the user by ID
  const result = await User.findByIdAndDelete(id);
  if (!result) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'User deleted successfully!' }, { status: 200 });
}
