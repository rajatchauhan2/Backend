import { Router } from "express";
import { registerUser } from "../conttrolers/user.controller.js";

const router = Router()

router.post("/api/v1/users/register",registerUser)


export default router