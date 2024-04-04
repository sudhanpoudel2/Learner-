import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv/config";
import staffRouter from "./router/staffRouter.js";
import { dbConnection } from "./Db/db.js";
import rightRouter from "./router/rightRouter.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/staff", staffRouter);
app.use("/right", rightRouter);

app.listen(3000, (req, res) => {
  console.log(`Server is running at ${3000}`);
});
