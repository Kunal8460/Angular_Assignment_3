const express = require('express');
const helmet = require('helmet');
const ejs = require('ejs');
const router = require('./routes/router');
const path = require("path");
const mongoose = require('mongoose');

const app = express()

app.set("view engine", "ejs")

app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/css", express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js")))
app.use(express.static("./public/uploads"))
app.use("/", router)

app.listen(3100, () => {
    try {
        mongoose.connect("mongodb://localhost:27017/vehicleDB")
        console.log("server is listening at port 3100")
    } catch (error) {
        console.log("error:", error);
    }
})