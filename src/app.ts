import express, { Application, Request, Response } from "express";
// import { UserRouters } from "./modules/user/user.route";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/", UserRoutes);

export default app;
