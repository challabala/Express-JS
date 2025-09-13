// const express = require('express')

import express from "express";
import { userLogin, userSignIn } from "./controller.js";
import router from "./routes.js";
import e from "express";
import multer from "multer";
import { connectDB } from "./config/db.js";
import { Person } from "./models/person.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const app = express();

const Port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});


app.listen(Port, () => {
  console.log(`The Server Is Running At ${Port}`);
});
