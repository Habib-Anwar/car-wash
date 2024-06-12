import { NextFunction, Request, Response } from "express";
import serviceValidationSchema from "./service.validation";
import { carWashServices } from "./service.service";

const createService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceData = req.body;
    // Validate the user data using Zod
    const zodParsedData = serviceValidationSchema.parse(serviceData);
    const result = await carWashServices.createServiceIntoDB(zodParsedData);
    res.json({
      success: true,
      message: "Service is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const result = await carWashServices.getSingleService(id);

    res.json({
      success: true,
      message: "Service retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getAllServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await carWashServices.getAllServices();
    res.json({
      success: true,
      message: "Services retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const serviceControllers = {
  createService,
  getService,
  getAllServices,
};
