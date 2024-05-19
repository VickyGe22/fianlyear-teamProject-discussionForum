import { getDataFromToken } from "../../../../libs/getDatafromToken";
import connectDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";


export async function GET(request:NextRequest){

    try {
        connectDB();
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId});
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}