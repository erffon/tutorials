import { NextResponse } from "next/server";
import Topic from "../../../../models/topic";
import connectMongoDB from "../../../../libs/mongodb";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  Topic.create({ title, description });
  return NextResponse.json(
    { message: "Topic Created Successfully" },
    { status: 201 },
    { success: true }
  );
}

export async function GET(request) {
  await connectMongoDB();
  const topics = await Topic.find();
  if (topics.length > 0) {
    return NextResponse.json({
      message: "All Topics returned Successfully ✅",
      topics,
    });
  } else {
    return NextResponse.json(
      { message: "No Topics Found 🚫" },
      { status: 400 }
    );
  }
}
