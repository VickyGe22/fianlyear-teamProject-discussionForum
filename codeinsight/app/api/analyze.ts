import { exec } from 'child_process';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import connectDB from '@/libs/mongodb';
import Submit from "@/models/submit";
import { NextRequest, NextResponse } from "next/server";


export default async function POST(request: NextRequest) {
  
  const reqBody = await request.json()
  console.log('hhahahaaaaaaaaaaa',reqBody);
  
  {
    try {
      
      await connectDB();
      const {code} = reqBody;
      console.log('hahohaohoahoa',code);

        
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

        res.status(200).json({
          staticAnalysis: pylintResult,
          complexityAnalysis: radonResult,
        });
      } catch (error) {
        console.error('Analysis error:', error);
        res.status(500).json({ error: 'Failed to analyze code' });
      } finally {
        await fs.unlink(filename);
      }
    } catch (error) {
      console.error('Request processing error:', error);
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}



function runCommand(command) {
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
