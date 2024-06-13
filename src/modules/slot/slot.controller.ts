import { NextFunction, Request, Response } from "express";
import { slotServices } from "./slot.service";

const createSlot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const slot = req.body;

    const result = await slotServices.addSlot(slot);
    res.json({
      success: true,
      message: "Slots created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getBookedSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await slotServices.getSlot();
    res.json({
      success: true,
      message: "Available slots retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const slotControllers = {
  createSlot,
  getBookedSlot,
};
