import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

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
  getUser,
};
