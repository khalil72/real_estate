import { supabaseAdmin } from "@/lib/supabase/supabase-admin";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("users")
      .select("*")
      .neq("role", "admin") // Exclude admins
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}