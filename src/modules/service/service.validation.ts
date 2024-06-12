import { z } from "zod";

const serviceValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive("Price must be a positive number"),
  duration: z.number(),
  isDeleted: z.boolean().default(false),
});

export default serviceValidationSchema;
