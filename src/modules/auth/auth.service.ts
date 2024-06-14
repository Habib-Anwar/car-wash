import { TUser } from "../user/user.interface";

import { TLoginUser } from "./auth.interface";
import { User } from "./auth.model";

const loginUser = async (payload: TLoginUser) => {
  console.log(payload);
  return {};
};

const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

export const AuthServices = {
  loginUser,
  createUserIntoDB,
};
