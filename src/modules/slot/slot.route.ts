import express from "express";
import { slotControllers } from "./slot.controller";

const router = express.Router();

router.post("/", slotControllers.createSlot);
router.get("/availability", slotControllers.getBookedSlot);

export const SloteRouters = router;
