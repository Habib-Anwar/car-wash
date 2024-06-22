import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const BookingSchema = new Schema<TBooking>(
  {
    serviceId: { type: Schema.Types.ObjectId, ref: "Service" },
    slotId: { type: Schema.Types.ObjectId, ref: "Slot" },
    vehicleType: {
      type: String,
      enum: [
        "car",
        "truck",
        "SUV",
        "van",
        "motorcycle",
        "bus",
        "electricVehicle",
        "hybridVehicle",
        "bicycle",
        "tractor",
      ],
      required: true,
    },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: String, required: true },
    registrationPlate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Booking = model<TBooking>("Booking", BookingSchema);
