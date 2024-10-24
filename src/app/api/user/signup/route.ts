import { NextResponse } from "next/server";
import {connect} from '@/dbconfig/dbconfig';
import User from '@/models/User';
import bcrypt from 'bcryptjs';



export async function POST(request: Request) {
    const { email, password,username } = await request.json();
  
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }
  
    await connect();
  
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword,username });
  
    // Save the new user
    await newUser.save();
    return NextResponse.json({ message: 'User signed up successfully!' }, { status: 201 });
  }