import connectDB from "@/libs/mongodb";
import Replyes from "@/models/Replies";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {

  const {id} = params;
  const { newReply: replyText, newCre: creator, newDate: createdAt } = await req.json();
  
  try {
    await connectDB();
    await Replyes.findByIdAndUpdate(id, { replyText, creator, createdAt });
    return NextResponse.json({ msg: ["reply updated successfully"] });
    }
    catch (error) {
        return NextResponse.json({ msg: ["Unable to update reply."] });
        }
}


export async function GET(request, context) {
  await connectDB();  // Ensure the database connection is established
  const { params } = context;

  // Retrieve the document using findOne() with async/await
  const reply = await Replyes.findOne({ _id: params.id });

  if (!reply) {
    // Handle the case where no document is found
    return new Response(JSON.stringify({ error: 'reply not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Respond with the found document details
  return NextResponse.json({ reply });
}
