import { NextFunction, Request, Response } from "express";
import { BookingServices } from "./booking.service";

const createWashBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await BookingServices.createBooking(req.body);

    res.json({
      success: true,
      message: "Booking successful",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllWashBookings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await BookingServices.getAllBookings();

    res.json({
      success: true,
      message: "All bookings retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleWashBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookingId } = req.params;
    const result = await BookingServices.getSingleBooking(bookingId);
    res.json({
      success: true,
      message: "User bookings retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const BookingControllers = {
  createWashBooking,
  getAllWashBookings,
  getSingleWashBooking,
};
