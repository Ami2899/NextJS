// import { NextResponse } from "next/server"
// import connect from "@/utils/db"
// import Post from "@/models/Post"
// import { ObjectId } from "mongodb"

// export const GET=async({params}: { params: { id: ObjectId } })=>{
//     const {id}=params
    // try {
    //     await connect()
    //     const post = await Post.findById(id);
    //     const responseBody = JSON.stringify(post);
    //     return new NextResponse(responseBody, { status: 200 });

    // } catch (error) {
    //     return new NextResponse("Database Error",{status:500})
    // }
// }

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import { ObjectId } from "mongodb";

export const GET = async ({ params }: { params: { id?: ObjectId } }) => {
  const id = params?.id;
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
