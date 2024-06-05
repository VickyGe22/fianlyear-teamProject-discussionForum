import connectDB from "@/libs/mongodb";
import Discussion from "@/models/discussion";
import { NextResponse } from "next/server";
import mongoose from "mongoose";


export async function POST(req, {params}) {
  const { submitId } = params;
  const { issuetitle, description, creator, replies, totalReplies, createdAt, username, userimage } = await req.json();

  try {
    await connectDB();
    await Discussion.create({ submitId, issuetitle, description, creator, replies, totalReplies, createdAt, username, userimage });
    await Discussion.save();
    res.status(201).json(Discussion);

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
  const { submitId } = context.params;

  // Retrieve the document using findOne() with async/await
  const discussions = await Discussion.find({ submitId: submitId });

  if (!discussions) {
    // Handle the case where no document is found
    return new Response(JSON.stringify({ error: 'discussions not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Respond with the found document details
  return NextResponse.json({ discussions });
}




// export async function GET(req) {
//   const { submitId } = req.query;
  
//   try {
//     await connectDB();
//     const discussions = await Discussion.find({ submitId });
//     // const discussions = await Discussion.find().populate('submitId')
//     return NextResponse.json({ discussions });
//   } catch (error) {
//     return NextResponse.json({ msg: ["Unable to fetch discuss."] });
//   }
// }