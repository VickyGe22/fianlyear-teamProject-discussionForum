import { exec } from 'child_process';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import connectDB from '@/libs/mongodb';
import Submit from "@/models/submit";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest,res: NextResponse) {
  
  const reqBody = await request.json()
  
  {
    try {
      await connectDB();
      const {code} = reqBody;

        
      const filename = path.join('/tmp', `${uuidv4()}.py`);
      await fs.writeFile(filename, code);

      try {
        const pylintResult = await runCommand(`pylint ${filename}`);
        const radonResult = await runCommand(`radon cc ${filename}`);
        
        const newSubmit = new Submit({
          staticAnalysis: pylintResult,
          complexityAnalysis: radonResult,
        });
        await newSubmit.save();

        return NextResponse.json({
          staticAnalysis: pylintResult,
          complexityAnalysis: radonResult,
        }, { status: 200 });
      } catch (error) {
        console.error('Analysis error:', error);
        return NextResponse.json({ error: 'Failed to analyze code' }, { status: 500 });
      } finally {
        await fs.unlink(filename);
      }
    } catch (error) {
      console.error('Request processing error:', error);
      return NextResponse.json({ error: error }, { status: 400 });
    }
  }
}



function runCommand(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}
