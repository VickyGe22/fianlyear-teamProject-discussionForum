import connectDB from "@/libs/mongodb";
import Discussion from "@/models/submit";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {

  const {id} = params;
  const { newIssue: issuetitle, newDes: description, newCre: creator, newRep: replies, newNum:totalReplies, newCre: createdAt } = await req.json();
  
  try {
    await connectDB();
    await Discussion.findByIdAndUpdate(id, { issuetitle, description, creator, replies, totalReplies, createdAt });
    return NextResponse.json({ msg: ["Discussion updated successfully"] });
    }
    catch (error) {
        return NextResponse.json({ msg: ["Unable to update Discussion."] });
        }
}


export async function GET(request, context) {
  await connectDB();  // Ensure the database connection is established
  const { params } = context;

  // Retrieve the document using findOne() with async/await
  const discuss = await Discussion.findOne({ _id: params.id });

  if (!discuss) {
    // Handle the case where no document is found
    return new Response(JSON.stringify({ error: 'Submit not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Respond with the found document details
  return NextResponse.json({ discuss });
}
