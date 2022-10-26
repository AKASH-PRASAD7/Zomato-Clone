import express from "express";
import dotenv from "dotenv";

//DB Connection
import dbconnect from "./database/connection";

dotenv.config();

const app = express();

app.use(express.json());

const port = 8080;

app.listen(port, () => {
  // dbconnect()
  //   .then(() => {
  //     console.log("Server is Running !");
  //   })
  //   .catch((error) => {
  //     console.log("Server is Running But Database Connection error");
  //     console.log(error);
  //   });
  console.log("Server is Running !");
});

app.use("/", (req, res) => {
  res.status(200).json({
    message: "Server Is Running !",
  });
});
