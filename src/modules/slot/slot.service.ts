import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";

const addSlot = async (payload: TSlot) => {
  const result = await Slot.create(payload);
  return result;
};
const getSlot = async () => {
  const result = await Slot.find();
  return result;
};

export const slotServices = {
  addSlot,
  getSlot,
};
