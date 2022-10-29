import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
UserSchema.methods.generateJwtTokens = function () {
  return jwt.sign({ user: this._id.toString() }, "akash");
};

//helpers functions
UserSchema.statics.findByEmailandPhone = async ({ email, contact }) => {
  const checkemail = await UserModel.findOne({ email });
  const checkphone = await UserModel.findOne({ contact });

  if (checkemail || checkphone) {
    throw new Error("User Already exists...!");
  }
  return false;
};
UserSchema.statics.findByEmailandPassword = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error("User does not exists..!");
  }
  const checkpass = await bcrypt.compare(password, this.password);
  if (!checkpass) {
    throw new Error("Invalid Password...!");
  }
  return user;
};

UserSchema.pre("save", function (next) {
  const user = this;

  //pass is modified
  if (user.isModified("password")) return next();

  //salting pass
  bcrypt.genSalt(2, (error, salt) => {
    if (error) return next(error);

    //hashing
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      user.password = hash;
      return next();
    });
  });
});
export const UserModel = mongoose.model("users", UserSchema);
