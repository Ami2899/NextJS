import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async () => {
  try {
    await connect();
    const posts = await Post.find();
    const responseBody = JSON.stringify(posts);
    return new NextResponse(responseBody, { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
