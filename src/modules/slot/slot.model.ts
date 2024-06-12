import { Schema, model } from "mongoose";
import { T24HourFormat, TSlot } from "./slot.interface";

const hoursArray: T24HourFormat[] = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];

const SlotSchema = new Schema<TSlot>({
  service: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, enum: hoursArray, required: true },
  endTime: { type: String, enum: hoursArray, required: true },
  isBooked: { type: Boolean, required: true },
});

export const Slot = model<TSlot>("Slot", SlotSchema);
