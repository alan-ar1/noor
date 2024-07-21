import { Types } from "mongoose";

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Tag from "../../../../models/tagModel";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
  // try {
  //   const tags = await Tag.find();
  return new NextResponse(
    JSON.stringify([
      {
        _id: { $oid: "669c1c775018c98d196bc8b0" },
        option: { label: "ئایەتەکان", value: "ئایەتەکان" },
        createdAt: { $date: { $numberLong: "1721506935350" } },
        updatedAt: { $date: { $numberLong: "1721506935350" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: { $oid: "669c1c775018c98d196bc8b0" },
        option: { label: "ئایەتەکان", value: "ئایەتەکان" },
        createdAt: { $date: { $numberLong: "1721506935350" } },
        updatedAt: { $date: { $numberLong: "1721506935350" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: { $oid: "669c1c775018c98d196bc8b0" },
        option: { label: "ئایەتەکان", value: "ئایەتەکان" },
        createdAt: { $date: { $numberLong: "1721506935350" } },
        updatedAt: { $date: { $numberLong: "1721506935350" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: { $oid: "669c1c775018c98d196bc8b0" },
        option: { label: "ئایەتەکان", value: "ئایەتەکان" },
        createdAt: { $date: { $numberLong: "1721506935350" } },
        updatedAt: { $date: { $numberLong: "1721506935350" } },
        __v: { $numberInt: "0" },
      },
      {
        _id: { $oid: "669c1c775018c98d196bc8b0" },
        option: { label: "ئایەتەکان", value: "ئایەتەکان" },
        createdAt: { $date: { $numberLong: "1721506935350" } },
        updatedAt: { $date: { $numberLong: "1721506935350" } },
        __v: { $numberInt: "0" },
      },
    ]),
    { status: 200 }
  );
  // } catch (error: any) {
  //   return new NextResponse("Error fetching tags: " + error.message, {
  //     status: 500,
  //   });
  // }
};

export const POST = async (req: Request) => {
  try {
    // const { userId } = auth();

    // if (!userId) {
    //   return new NextResponse(
    //     JSON.stringify({ message: "You must be authenticated" }),
    //     {
    //       status: 401,
    //     }
    //   );
    // }

    const body = await req.json();
    console.log("bodyyyyyyyyy", body);
    const newTag = new Tag(body);
    await newTag.save();

    return new NextResponse(
      JSON.stringify({ message: "tag is created", tag: newTag }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating tag" + error.message, {
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

    const body = await req.json();
    const { tagId, option } = body;
    if (!tagId || !option) {
      return new NextResponse(
        JSON.stringify({ message: "ID or new tag name not found" }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(tagId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid tag id" }), {
        status: 400,
      });
    }

    const updatedTag = await Tag.findOneAndUpdate(
      { _id: new ObjectId(tagId) },
      { option: option },
      { new: true }
    );

    if (!updatedTag) {
      return new NextResponse(
        JSON.stringify({ message: "tag not found in the database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "tag is updataed", tag: updatedTag }),
      { status: 400 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: "Error in updating tag" }),
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
    const tagId = searchParams.get("tagId");
    if (!tagId) {
      return new NextResponse(JSON.stringify({ message: "tag ID not found" }), {
        status: 400,
      });
    }

    if (!Types.ObjectId.isValid(tagId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid tag id" }), {
        status: 400,
      });
    }

    const deletedTag = await Tag.findByIdAndDelete(new Types.ObjectId(tagId));

    if (!deletedTag) {
      return new NextResponse(
        JSON.stringify({ message: "tag not found in the database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "DELETE request received", tag: deletedTag }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error in deleting tag" }),
      { status: 500 }
    );
  }
};
