import express from "express";
import { Staff } from "../model/staffMode.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const add = await Staff({
    name: req.body.name,
    email: req.body.email,
  });
  const saveStaff = await add.save();
  res.status(200).send({ result: saveStaff, message: "successfully save" });
});

export default router;
