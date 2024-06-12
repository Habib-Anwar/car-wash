import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const NameSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const userSchema = new Schema({
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

// pre save middleware/ hook : will work on create(), save()
userSchema.pre("save", async function (next) {
  console.log(this, "pre hook : we will save data");
  const user = this;
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// post save middleware / hook : will work on create() save()
userSchema.post("save", function (doc, next) {
  // console.log(this, "post hook : We saved our data");
  doc.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
