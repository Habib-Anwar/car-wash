import express from "express";
import { serviceControllers } from "./service.controller";

const router = express.Router();

router.post("/", serviceControllers.createService);
router.get("/:id", serviceControllers.getService);
router.put("/:id", serviceControllers.updateServicHandler);
router.get("/", serviceControllers.getAllServices);
router.delete("/:id", serviceControllers.deleteServiceHandler);

export const ServiceRouters = router;
