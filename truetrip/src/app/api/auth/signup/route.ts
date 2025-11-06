
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectToDB from "../../../../lib/mongodb";
import User from "../../../../models/User";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ success: true, message: "Signup successful", user: newUser });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Signup failed", error }, { status: 500 });
  }
}
