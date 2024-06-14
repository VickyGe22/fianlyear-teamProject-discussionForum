import { getDataFromToken } from "../../../../libs/getDatafromToken";
import connectDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";


export async function GET(request: NextRequest) {
    try {

        await connectDB();
        console.log("Connected to database");


        const userId = await getDataFromToken(request);
        if (!userId) {
            throw new Error("User not authenticated");
        }
        console.log("User ID:", userId);


        const user = await User.findOne({ _id: userId });
        if (!user) {
            throw new Error("User not found");
        }
        console.log("User found:", user);


        return NextResponse.json({
            message: "User found",
            data: user
        });
    } catch (error: any) {
        console.error("Error:", error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}