import connectDB from "@/libs/mongodb";
import Replyes from "@/models/Replies";
import { NextResponse } from "next/server";
import mongoose from "mongoose";


export async function POST(req) {
  const { discussionId } = req.params;
  const { replyText, creator, createdAt} = await req.json();

  try {
    await connectDB();
    await Replyes.create({ discussionId, replyText, creator, createdAt});
    await Replyes.save();
    res.status(201).json(Replyes);

    return NextResponse.json({
      msg: [" "],
      success: true,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}


export async function GET(request, context) {
  await connectDB();  // Ensure the database connection is established
  const { discussionId } = context.params;

  // Retrieve the document using findOne() with async/await
  const reply = await Replyes.find({ discussionId: discussionId });

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