import connectDB from "@/libs/mongodb";
import Discussion from "@/models/discussion";
import { NextResponse } from "next/server";
import mongoose from "mongoose";


export async function POST(req) {
  const { submitId, issuetitle, description, creator, replies, createdAt} = await req.json();

  try {
    await connectDB();
    await Discussion.create({ submitId, issuetitle, description, creator, replies, createdAt});

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

// export async function GET() {
//   try {
//     await connectDB();
//     const discussions = await Discussion.find();
//     return NextResponse.json({ submits });
//   } catch (error) {
//     return NextResponse.json({ msg: ["Unable to fetch submits."] });
//   }
// }

export async function GET() {
  try {
    await connectDB();
    const discussions = await Discussion.find();
    // const discussions = await Discussion.find().populate('submitId').populate('replies');
    return NextResponse.json({ discussions });
  } catch (error) {
    return NextResponse.json({ msg: ["Unable to fetch submits."] });
  }
}


export async function DELETE(req) {

  const id  = req.nextUrl.searchParams.get("id");
  try {
    await connectDB();
    await Submit.findByIdAndDelete(id);
    return NextResponse.json({ msg: ["Submit deleted successfully"] });
  }
  catch (error) {
    return NextResponse.json({ msg: ["Unable to delete submit."] });
  }
}