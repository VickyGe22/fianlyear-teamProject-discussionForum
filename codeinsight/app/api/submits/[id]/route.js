import connectDB from "@/libs/mongodb";
import Submit from "@/models/submit";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {

  const {id} = params;
  const { newSample: codesamples, newLanguages: languages, newLevels: levels, newTypes: types, newDes: issuedescriptions, newTag: tags } = await req.json();
  
  try {
    await connectDB();
    await Submit.findByIdAndUpdate(id, { codesamples, languages, levels, types, issuedescriptions, tags });
    return NextResponse.json({ msg: ["Submit updated successfully"] });
    }
    catch (error) {
        return NextResponse.json({ msg: ["Unable to update submit."] });
        }
}

export async function GET(req, {params}) {
  const {id} = params;
  try {
    await connectDB();
    const submit = await Submit.findOne({ _id: id });
    return NextResponse.json({ submit });
  } catch (error) {
    return NextResponse.json({ msg: ["Unable to fetch submits."] });
  }
}