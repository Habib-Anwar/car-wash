import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string(),
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

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required." }),
    password: z.string({ required_error: "Password is required" }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
  userValidationSchema,
};
