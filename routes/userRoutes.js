import express from "express";
import {
  deleteUser,
  getUser,
  registerProfile,
  singleuser,
  updateUser,
} from "../controller/user.js";

const router = express.Router();

router.post("/register", registerProfile);
router.get("/getuser", getUser);
router.delete("/delete/:id", deleteUser);
router.put("/updateuser/:id", updateUser);
router.get("/singleuser/:id", singleuser);

export default router;
