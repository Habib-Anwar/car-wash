import { NextFunction, Request, Response } from "express";
import { AuthServices } from "./auth.service";
import { AuthValidation } from "./auth.validation";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    console.log(userData);

    const result = await AuthServices.createUserIntoDB(userData);
    res.json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);
  res.json({
    success: true,
    message: "User is logged in successfully!",
    data: result,
  });
};
export const AuthControllers = {
  loginUser,
  createUser,
};
