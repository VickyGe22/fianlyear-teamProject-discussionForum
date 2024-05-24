import { NextResponse } from "next/server";
import connectDB from "@/libs/mongodb";


export async function GET() {
    
    try {
        await connectDB();
        const response = NextResponse.json(
            {
                message: "Signout successful",
                success: true,
            }
        )
        response.cookies.set("token", "", 
        { httpOnly: true, expires: new Date(0) 
        });
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
        
    }
