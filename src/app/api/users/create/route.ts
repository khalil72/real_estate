import { supabaseAdmin } from '@/lib/supabase/supabase-admin';
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from 'next/server'
export async function POST(req:Request){
    try {
        const body = await req.json();
          const {
      name,
      email,
      password,
      role = "user",
      status = "active",
      dob,
      gender,
      address,
      phone,
      profilePicture,
    } = body;

  if (!name || !email || !password  || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and password are required",
        },
        { status: 400 }
      );
    }
   const { data: existingUser } = await supabaseAdmin
      .from("users")
      .select("id,email")
      .eq("email", email)
      .maybeSingle();

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 409 }
      );
    }
      const hashedPassword = await bcrypt.hash(password, 10);
      //create user
      const { data, error } = await supabaseAdmin
      .from("users")
      .insert({
        name,
        email,
        password: hashedPassword,
        role,
        status,
        dob,
        gender,
        address,
        phone,
        profile_picture: profilePicture,
      })
      .select()
      .single();
      if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        data,
      },
      { status: 201 }
    );

    } catch (error) {
        console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
    }
}