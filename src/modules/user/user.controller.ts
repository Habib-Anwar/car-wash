import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import { UserValidation } from "./user.validation";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    // Validate the user data using Zod
    const zodParsedData = UserValidation.userValidationSchema.parse(userData);
    const result = await UserServices.createUserIntoDB(zodParsedData);
    res.json({
      success: true,
      message: "User is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = UserServices.getAllUsers();
    res.json({
      success: true,
      message: "Users are fetch successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createUser,
  getUser,
};
