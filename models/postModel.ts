import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true, unique: false },
    body: { type: String, required: true, unique: false },
    imgPath: { type: String, required: true, unique: false },
    tags: {
      type: [
        {
          type: Map,
          of: String,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", PostSchema);

export default Post;
