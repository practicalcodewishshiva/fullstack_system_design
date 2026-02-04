// npm i  express

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("../Backend/db.js");
const router = express.Router();
const loginSchema = require("../Backend/Schemas/UserLoginSchema.js");
const {
  defaultAppRoute,
  loginRoute,
  signUpRoute,
} = require("../Backend/Routes/routes.js");

const jwt = require("jsonwebtoken");

console.log("UserLoginSchema", loginSchema);

const app = express();
connectDB();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("initiali file is loading");
});

// signUp
app.post("/user-signup", async (req, res) => {
  const { userName, fullName, password, captcha, conformPassword } = req.body;

  try {
    const userDetails = {
      userName,
      password,
      fullName,
      conformPassword,
      captcha,
    };

    const newUser = new loginSchema(userDetails);
    try {
      const savedUser = await newUser.save();
      console.log("Document inserted:", savedUser);
    } catch (err) {
      console.error(err);
    }
    res.send({
      data: userDetails,
      message: "User Logged in succesfully",
      isAutheticated: true,
      isLoggedIn: true,
    });
  } catch (error) {
    console.log(error);
  }
});

// 2ND API
// Login api

app.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  const userDetails = {
    userName,
    password,
  };

  const generateJWTToken = (userId) => {
    return jwt.sign(
      {userId},
      `${process.env.JWT_SECRET}`,
    );
  };

  // console.log("generateJWTToken", generateJWTToken("sjdhgshjdgf"));
  console.log("username", userName);
  try {
    const findUserNameFromDb = await loginSchema.findOne({
      userName,
    });

    const tokenValue = findUserNameFromDb._id;
    console.log(findUserNameFromDb._id, "userDetails");

    const token = generateJWTToken(tokenValue);
    findUserNameFromDb
      ? res.send({
          access_token: token,
          loginUser: "user logged insuccesfully",
          isLoggedIn: true,
        })
      : res.send({ error: "there is no user or authenticatation failed" });

    // shiva ? true : false
  } catch (err) {
    res.send({
      message: "there is no user found",
    });
    console.error(err);
  }
});

app.listen(8000);

// certificate tc --- pricnipal signature -- valid

// backend api create not required
