import connectDB from "@/libs/mongodb";
import GeneReply from "@/models/GeneReply";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {

  const {id} = params;
  const { newReply: replyText, newCreator: creator, newCreatedat: createdAt } = await req.json();
  
  try {
    await connectDB();
    await GeneReply.findByIdAndUpdate(id, { replyText, creator, createdAt });
    return NextResponse.json({ msg: ["Generalreply updated successfully"] });
    }
    catch (error) {
        return NextResponse.json({ msg: ["Unable to update generalreply."] });
        }
}


export async function GET(request, context) {
  await connectDB();  // Ensure the database connection is established
  const { params } = context;

  // Retrieve the document using findOne() with async/await
  const geneReply = await GeneReply.findOne({ _id: params.id });

  if (!geneReply) {
    // Handle the case where no document is found
    return new Response(JSON.stringify({ error: 'GeneReply not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Respond with the found document details
  return NextResponse.json({ geneReply });
}
