import db from "@/app/lib/prisma";
import { NextResponse } from "next/server";

//PUT request to UPDATE TOPIC

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id: topicId } = params;
  const { newTitle: title, newDescription: description } = await request.json();

  await db.topic.update({
    where: {
      id: topicId,
    },
    data: {
      title,
      description,
    },
  });

  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

//GET request to SELECT ONE TOPIC

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id: topicId } = params;

  const topic = await db.topic.findUnique({ where: { id: topicId } });

  return NextResponse.json({topic, message:"It's working"}, {status: 200})
}
