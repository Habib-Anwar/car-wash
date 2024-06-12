import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServiceIntoDB = async (serviceData: TService) => {
  const result = await Service.create(serviceData);
  return result;
};
const getSingleService = async (id: string) => {
  const result = await Service.findById(id);
  return result;
};
const updateService = async (id: string, updateData: Partial<TService>) => {
  const result = await Service.updateOne({ _id: id }, { $set: updateData });
  if (result.modifiedCount === 0) {
    throw new Error("Service not found or no changes made");
  }
  return result;
};

const getAllServices = async () => {
  const result = await Service.find();
  return result;
};
const deleteService = async (id: string) => {
  const result = await Service.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );
  if (result.matchedCount === 0) {
    throw new Error("Service not found");
  }
  return result;
};

export const carWashServices = {
  createServiceIntoDB,
  getSingleService,
  getAllServices,
  updateService,
  deleteService,
};
