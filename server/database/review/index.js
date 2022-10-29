import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    food: { type: mongoose.Types.ObjectId, ref: "foods" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "restaurants" },
    rating: { type: Number, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    reviewtext: { type: String, required: true },
    isrestrareview: Boolean,
    isfoodreview: Boolean,
    photo: { type: mongoose.Types.ObjectId, ref: "images" },
  },
  {
    timestamps: true,
  }
);

export const ReviewModel = mongoose.model("reviews", ReviewSchema);
