import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request: any, {params}:any) => {
  
  const {id} = params;
  if (!id) {
    return new NextResponse("Invalid ID", { status: 400 });
  }
  try {
    await connect()
    const post = await Post.findById(id);
    const responseBody = JSON.stringify(post);
    return new NextResponse(responseBody, { status: 200 });

} catch (error) {
    return new NextResponse("Database Error",{status:500})
}
};

export const DELETE = async (request:any, { params }:any) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};