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
const getAllServices = async () => {
  const result = await Service.find();
  return result;
};

export const carWashServices = {
  createServiceIntoDB,
  getSingleService,
  getAllServices,
};
