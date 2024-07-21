import { Types } from "mongoose";

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Post from "../../../../models/postModel";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async (req: Request) => {
  // try {
  //   const { searchParams } = new URL(req.url);

  //   if (searchParams.get("query")) {
  //     const searchTerm = searchParams.get("query");
  //     const query = {
  //       $or: [
  //         { title: { $regex: searchTerm, $options: "i" } },
  //         { body: { $regex: searchTerm, $options: "i" } },
  //       ],
  //     };
  //     const searchedPosts = await Post.find(query);

  //     return new NextResponse(JSON.stringify(searchedPosts), { status: 200 });
  //   }
  //   const posts = await Post.find();
  //   console.log("getttttt");
  return new NextResponse(
    JSON.stringify([
      {
        _id: { $oid: "669d03cbbcf27ac946ddc117" },
        title: "afaf",
        body: "afewfewfe",
        imgPath:
          "https://utfs.io/f/43a4d9e8-aade-459e-97a4-c6a851126a16-4nmiu5.jpg",
        tags: [{ label: "فەرموودەکان", value: "فەرموودەکان" }],
        createdAt: { $date: { $numberLong: "1721566155913" } },
        updatedAt: { $date: { $numberLong: "1721566155913" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: { $oid: "669d03cbbcf27ac946ddc117" },
        title: "afaf",
        body: "afewfewfe",
        imgPath:
          "https://utfs.io/f/43a4d9e8-aade-459e-97a4-c6a851126a16-4nmiu5.jpg",
        tags: [{ label: "فەرموودەکان", value: "فەرموودەکان" }],
        createdAt: { $date: { $numberLong: "1721566155913" } },
        updatedAt: { $date: { $numberLong: "1721566155913" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: { $oid: "669d03cbbcf27ac946ddc117" },
        title: "afaf",
        body: "afewfewfe",
        imgPath:
          "https://utfs.io/f/43a4d9e8-aade-459e-97a4-c6a851126a16-4nmiu5.jpg",
        tags: [{ label: "فەرموودەکان", value: "فەرموودەکان" }],
        createdAt: { $date: { $numberLong: "1721566155913" } },
        updatedAt: { $date: { $numberLong: "1721566155913" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: { $oid: "669d03cbbcf27ac946ddc117" },
        title: "afaf",
        body: "afewfewfe",
        imgPath:
          "https://utfs.io/f/43a4d9e8-aade-459e-97a4-c6a851126a16-4nmiu5.jpg",
        tags: [{ label: "فەرموودەکان", value: "فەرموودەکان" }],
        createdAt: { $date: { $numberLong: "1721566155913" } },
        updatedAt: { $date: { $numberLong: "1721566155913" } },
        __v: { $numberInt: "0" },
      },
    ]),
    { status: 200 }
  );
  // } catch (error: any) {
  //   return new NextResponse("Error fetching posts: " + error.message, {
  //     status: 500,
  //   });
  // }
};

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "You must be authenticated" }),
        {
          status: 401,
        }
      );
    }

    const body = await req.json();

    const newPost = new Post(body);
    console.log("received: \n: " + newPost);
    await newPost.save();

    return new NextResponse(
      JSON.stringify({ message: "post is created", post: newPost }),
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error in creating post: " + error.message);
    return new NextResponse("Error in creating post: " + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (req: Request) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "You must be authenticated" }),
        {
          status: 401,
        }
      );
    }
    const payload = await req.json();
    console.log("Updated post: " + payload);
    const { postId, title, body, imgPath, tags } = payload;
    if (!postId || !title || !body || !imgPath || !tags) {
      return new NextResponse(JSON.stringify({ message: "Fill all fields" }), {
        status: 400,
      });
    }

    if (!Types.ObjectId.isValid(postId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid user id" }), {
        status: 400,
      });
    }

    const updatedPost = await Post.findOneAndUpdate(
      { _id: new ObjectId(postId) },
      { title: title, body: body, tags: tags, imgPath: imgPath },
      { new: true }
    );

    if (!updatedPost) {
      return new NextResponse(
        JSON.stringify({ message: "post not found in the database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "post is updataed", user: updatedPost }),
      { status: 400 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: "Error in updating post" }),
      { status: 500 }
    );
  }
};

export const DELETE = async (req: Request) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "You must be authenticated" }),
        {
          status: 401,
        }
      );
    }
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId");
    if (!postId) {
      return new NextResponse(JSON.stringify({ message: "ID not found" }), {
        status: 400,
      });
    }

    if (!Types.ObjectId.isValid(postId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid post id" }), {
        status: 400,
      });
    }

    const deletedPost = await Post.findByIdAndDelete(
      new Types.ObjectId(postId)
    );

    if (!deletedPost) {
      return new NextResponse(
        JSON.stringify({ message: "post not found in the database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "DELETE request received", user: deletedPost }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error in deleting user" }),
      { status: 500 }
    );
  }
};
