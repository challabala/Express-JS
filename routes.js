import express from "express";
import { userLogin, userSignIn } from "./controller.js";

const router = express.Router()

router.get('/signin',userSignIn)
router.get('/login',userLogin)

export default router