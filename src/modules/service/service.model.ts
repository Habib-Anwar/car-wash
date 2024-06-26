import { Schema, model } from "mongoose";
import { TService } from "./service.interface";

const serviceSchema = new Schema<TService>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

export const Service = model<TService>("Service", serviceSchema);
