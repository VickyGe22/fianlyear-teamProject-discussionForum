import { getDataFromToken } from "../../../../libs/getDatafromToken";
import connectDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";


export async function GET(request: NextRequest) {
    try {
        // 异步连接数据库并等待完成
        await connectDB();
        console.log("Connected to database");

        // 从请求中获取用户 ID
        const userId = await getDataFromToken(request);
        if (!userId) {
            throw new Error("User not authenticated");
        }
        console.log("User ID:", userId);

        // 查找用户
        const user = await User.findOne({ _id: userId });
        if (!user) {
            throw new Error("User not found");
        }
        console.log("User found:", user);

        // 返回用户数据
        return NextResponse.json({
            message: "User found",
            data: user
        });
    } catch (error: any) {
        console.error("Error:", error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}