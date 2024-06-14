import express from "express";
import { UserControllers } from "./user.controller";
const router = express.Router();

router.get("/get-user", UserControllers.getUser);
export const UserRoutes = router;
