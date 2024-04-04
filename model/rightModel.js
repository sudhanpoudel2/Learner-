import mongoose, { Schema } from "mongoose";

const rightSchema = new Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
    },
    right: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Right = mongoose.model("Right", rightSchema);
