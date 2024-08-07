import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/libs/mongodb";

export const getDataFromToken = (request: NextRequest) => {
    try {
        // connectDB();
        const token = request.cookies.get("token")?.value || '';
        if (!token) {
            throw new Error("No token found");
        }
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken.id;
    } catch (error: any) {
        throw new Error(error.message);
    }

}