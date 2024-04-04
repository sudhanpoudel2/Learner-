import express from "express";
import { Right } from "../model/rightModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const right = await Right({
    staff_id: req.body.staff_id,
    right: req.body.right,
  });
  const addRight = await right.save();
  res.status(200).send({ result: addRight, message: "Successfully!!" });
});

router.post("/populate", async (req, res) => {
  const rightData = await Right.findById(req.body.right_id).populate(
    "staff_id"
  ); // by using right is we found details of this right is after add populate we get staff detail in that id

  res.status(200).send(rightData);
});

export default router;
