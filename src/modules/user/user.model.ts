import { Schema, model } from "mongoose";
import { Name, TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const NameSchema = new Schema<Name>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const userSchema = new Schema<TUser>({
  name: { type: NameSchema, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true, enum: ["admin", "user"] },
  address: { type: String, required: true },
});

// pre save middleware/ hook
userSchema.pre("save", async function (next) {
  console.log(this, "pre hook : save data");
  const user = this;
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// post save middleware / hook
userSchema.post("save", function (doc, next) {
  // console.log(this, "post hook : Data has been saved");
  doc.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
