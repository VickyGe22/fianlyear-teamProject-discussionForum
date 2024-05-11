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



// export async function GET({params}) {
//   const {id} = params;
//   try {
//     await connectDB();
//     const submit = await Submit.findOne({ _id: id });
//     return NextResponse.json({ submit });
//   } catch (error) {
//     console.error('Error fetching submit:', error);
//     return NextResponse.json({ msg: ["Unable to fetch submits."] });
//   }
// }


// export async function GET(req) {
//   try {
//     await connectDB();
//     const pageId = req.nextUrl.searchParams.get("pageid"); // Get pageid from URL if present
//     const query = pageId ? { pageId: pageId } : {}; // Filter by pageId if it's present
//     const submits = await Submit.find(query);
//     return NextResponse.json({ submits });
//   } catch (error) {
//     return NextResponse.json({ msg: ["Unable to fetch submits."] });
//   }
// }

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
