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

export async function GET() {
  const { discussionId } = req.params;

  try {
    await connectDB();
    const reply = await Replyes.find(discussionId);
    // const discussions = await Discussion.find().populate('submitId').populate('replies');
    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ msg: ["Unable to fetch Replyes."] });
  }
}
