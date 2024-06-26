import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ServiceRouters } from "./modules/service/service.route";
import globalErrorHandler from "./middlewares/globalErrorhandler";
import { SloteRouters } from "./modules/slot/slot.route";
import { AuthRoutes } from "./modules/auth/auth.route";
import notFound from "./middlewares/notFound";
import { BookingRoutes } from "./modules/booking/booking.route";
import mongoose from "mongoose";

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/services", ServiceRouters);
app.use("/api/services/slots", SloteRouters);
app.use("/api/auth", AuthRoutes);
app.use("/api/bookings", BookingRoutes);
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
