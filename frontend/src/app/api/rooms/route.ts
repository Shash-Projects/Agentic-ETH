import { NextRequest, NextResponse } from "next/server";
import { saveRoom } from "@/db/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const room = await saveRoom(body);
    return NextResponse.json(room, { status: 201 });
  } catch (error) {
    console.error("Error creating room:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
