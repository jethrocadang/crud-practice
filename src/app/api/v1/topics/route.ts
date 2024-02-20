import db from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

// POST request for CREATE TOPIC

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description } = body;

    const newTopic = await db.topic.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(
      { topic: newTopic, message: "Topic Created Successfully" },
      { status: 201 }
    );
  } catch (error) {}
}

// GET request for LIST ALL TOPICS

export async function GET() {
  const topics = await db.topic.findMany();

  return NextResponse.json({ topics });
}

// DELETE request for DELETE TOPIC

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("id");

  await db.topic.delete({
    where: {
      id: query ?? "",
    },
  });

  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}
