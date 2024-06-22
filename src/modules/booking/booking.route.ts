import express from "express";
import { BookingControllers } from "./booking.controller";

const router = express.Router();
router.post("/", BookingControllers.createWashBooking);
router.get("/", BookingControllers.getAllWashBookings);
router.get("/my-bookings", BookingControllers.getSingleWashBooking);

export const BookingRoutes = router;
