
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const authRoute1=require("./routes/users");
const authRoute2=require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

const path = require("path");



dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err)=> console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);

app.use("/api/users", authRoute1);
app.use("/api/posts", authRoute2);


app.use("/api/categories", categoryRoute);


app.listen("5000", () => {
  console.log("Backend is running."); 
});