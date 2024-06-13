import express, { Application, Request, Response } from "express";
// import { UserRouters } from "./modules/user/user.route";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";
import { ServiceRouters } from "./modules/service/service.route";
import globalErrorHandler from "./middlewares/globalErrorhandler";
import { SloteRouters } from "./modules/slot/slot.route";

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/vi/users", UserRoutes);
app.use("/api/services", ServiceRouters);
app.use("/api/services/slots", SloteRouters);
app.use(globalErrorHandler);
export default app;
