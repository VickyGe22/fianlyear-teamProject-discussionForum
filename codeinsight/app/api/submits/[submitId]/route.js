import connectDB from "@/libs/mongodb";
import Submit from "@/models/submit";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { submitId: id } = params; // Correctly extract id from params
  console.log("ID:", id);
  
  const { acceptance, discuss_close } = await req.json(); // Get both fields if they exist
  
  try {
    await connectDB();
    const updateData = {};
    if (acceptance !== undefined) updateData.acceptance = acceptance;
    if (discuss_close !== undefined) updateData.discuss_close = discuss_close;

    const result = await Submit.findByIdAndUpdate(id, { $set: updateData }, { new: true });
    console.log("Updated data:", updateData);
    return NextResponse.json({ msg: ["Submit updated successfully"], result });
  } catch (error) {
    console.error("Error updating submit:", error);
    return NextResponse.json({ msg: ["Unable to update submit."] });
  }
}


export async function POST(req) {
  const { type, generalreply, tags, pageId } = await req.json(); 

  try {
    await connectDB();
    let updatedSubmit;

    if (type === "generalreply") {
      updatedSubmit = await Submit.findByIdAndUpdate(
        pageId,
        { $push: { generalreply: generalreply },
          $inc: { numberReply: 1 }
       }, 
        { new: true, runValidators: true }
      );
    } else if (type === "tags") {
      console.log("tags:", tags);
      updatedSubmit = await Submit.findByIdAndUpdate(
        pageId,
        { $set: { tags: tags } }, 
        { new: true, runValidators: true } 
      );
    } else {
      return NextResponse.json({ msg: ["Invalid update type"] }, { status: 400 });
    }

    if (!updatedSubmit) {
      return NextResponse.json({ msg: ["Document not found."], success: false });
    }

    return NextResponse.json({
      msg: ["Update successful."],
      success: true,
      result: updatedSubmit // 返回更新后的文档
    });
  } catch (error) {
    console.error(error);
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({ msg: ["Unable to update document."], success: false });
    }
  }
}


export async function GET(request, context) {
  await connectDB();  // Ensure the database connection is established
  const { params } = context;

  // Retrieve the document using findOne() with async/await
  const submit = await Submit.findOne({ _id: params.submitId });

  if (!submit) {
    // Handle the case where no document is found
    return new Response(JSON.stringify({ error: 'Submit not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Respond with the found document details
  return NextResponse.json({ submit });
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