import mongoose from "mongoose";

const ResataurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    maplocation: { type: String, required: true },
    cuisine: [String],
    restauranttiming: String,
    constactnumber: Number,
    website: String,
    populardishes: String,
    averagefood: Number,
    amenities: [String],
    menuimage: {
      type: mongoose.Types.ObjectId,
      ref: "menus",
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
    ],
    photos: { type: mongoose.Types.ObjectId, ref: "iamges" },
  },
  {
    timestamps: true,
  }
);

export const RestaurantModel = mongoose.model("restaurants", ResataurantSchema);
