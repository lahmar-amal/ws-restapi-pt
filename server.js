// 1
const express = require("express");
const cors = require("cors");
//2
const app = express();
//7
app.use(express.json());
app.use(cors());
const connectDB = require("./config/connectDB");
//3
require("dotenv").config();

const routes = require("./routes/contactRoutes");
//6
connectDB();
// 8
app.use("/api/contact", routes);
//4
const port = process.env.PORT;
//5
app.listen(port, (err) => {
    err
        ? console.log(err)
        : console.log(`this server is running on port : ${port}`);
});
