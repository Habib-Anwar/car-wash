import { z } from "zod";

const nameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const userValidationSchema = z.object({
  name: nameSchema,
  email: z.string().email("Invalid email address"),
  password: z
    .string({
      invalid_type_error: "Password must be a string",
    })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password cannot be more than 20 characters long" }),
  phone: z.string(),
  role: z.enum(["admin", "user"]),
  address: z.string(),
});

export const UserValidation = {
  userValidationSchema,
};
