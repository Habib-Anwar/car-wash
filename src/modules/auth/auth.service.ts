import { TUser } from "../user/user.interface";
import jwt from "jsonwebtoken";

import { TLoginUser } from "./auth.interface";
import { User } from "./auth.model";
import config from "../../config";

const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  // const user = await User.exists(payload.email);
  // const jwtPayload = {
  //   userEmail: user.email,
  //   role: user.role,
  // };
  // const accessToken = jwt.sign(
  //   jwtPayload,
  //   config.jwt_access_secret as string,
  //   { expiresIn: "30d" }
  // );
  // return { accessToken };
};
export const AuthServices = {
  loginUser,
  createUserIntoDB,
};
