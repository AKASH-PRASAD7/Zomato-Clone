import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    contact: [{ Number }],
    addres: [{ details: { type: String }, for: { type: String } }],
  },
  {
    timestamps: true,
  }
);

//attachments
UserSchema.methods.generateJwtTokens = function () {};

//helpers functions
UserSchema.statics.findByEmailandPhone = async () => {};
UserSchema.statics.findByEmailandPassword = async () => {};

export const UserModel = mongoose.model("users", UserSchema);
