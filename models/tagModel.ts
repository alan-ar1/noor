import { Schema, model, models } from "mongoose";

const TagSchema = new Schema(
  {
    option: {
      type: Map,
      of: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
