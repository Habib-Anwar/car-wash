import { z } from "zod";

// Define the name schema
const nameSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
});

// Define the user validation schema
const userValidationSchema = z.object({
  name: nameSchema,
  email: z.string().email("Invalid email address"),
  password: z
    .string({
      invalid_type_error: "Password must be a string",
    })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password cannot be more than 20 characters long" }),
  phone: z.string().nonempty("Phone number is required"),
  role: z.enum(["admin", "user"]),
  address: z.string().nonempty("Address is required"),
});

export const UserValidation = {
  userValidationSchema,
};
