import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBooking = async (payload: TBooking) => {
  const result = await Booking.create(payload);
  return result;
};

const getAllBookings = async () => {
  try {
    const result = await Booking.find()
      .populate("serviceId")
      .populate("slotId");
    return result;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};

const getSingleBooking = async (id: string) => {
  const result = await Booking.findById(id)
    .populate("serviceId")
    .populate("slotId");
  return result;
};

export const BookingServices = {
  createBooking,
  getAllBookings,
  getSingleBooking,
};
