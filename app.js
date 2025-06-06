const express = require("express");
const connection = require("./db/db");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.set("view engine", "ejs");
// Optional if using views
// const path = require("path");
// app.set("views", path.join(__dirname, "views"));

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    await connection();
    console.log("MongoDB connected");
    console.log("Server is running on port", port);
  } catch (error) {
    console.error("Connection failed:", error);
  }
});
