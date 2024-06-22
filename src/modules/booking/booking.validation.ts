import { z } from "zod";

const VehicleTypeEnum = z.enum([
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
]);

const bookingValidationSchema = z.object({
  body: z.object({
    service: z.string(),
    slot: z.string(),
    vehicleType: VehicleTypeEnum,
    vehicleBrand: z.string(),
    vehicleModel: z.string(),
    manufacturingYear: z.string(),
    registrationPlate: z.string(),
  }),
});

export default bookingValidationSchema;
