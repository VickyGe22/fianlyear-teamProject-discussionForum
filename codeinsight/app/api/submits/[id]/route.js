import connectDB from "@/libs/mongodb";
import Submit from "@/models/submit";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {

  const {id} = params;
  const { newSample: codesamples, newLanguages: languages, newLevels: levels, newTypes: types, newDes: issuedescriptions, newTag: tags, newissue: issue, newgene: generalreply } = await req.json();
  
  try {
    await connectDB();
    await Submit.findByIdAndUpdate(id, { codesamples, languages, levels, types, issuedescriptions, tags, issue, generalreply });
    return NextResponse.json({ msg: ["Submit updated successfully"] });
    }
    catch (error) {
        return NextResponse.json({ msg: ["Unable to update submit."] });
        }
 }

 export async function POST(req) {
  const { generalreply, pageId } = await req.json(); // Assuming pageId is sent in the request

  try {
    await connectDB();
    const updatedSubmit = await Submit.findByIdAndUpdate( pageId, 
      { $push: { generalreply: generalreply } }, // Push the new comment to the generalreply array
      // { new: true, runValidators: true } // Return the updated document and run schema validators
    );

    if (!updatedSubmit) {
      return NextResponse.json({ msg: ["Document not found."], success: false });
    }

    return NextResponse.json({
      msg: ["Comment added successfully."],
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
  const submit = await Submit.findOne({ _id: params.id });

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
