const express = require('express');
const helmet = require('helmet');
const router = require('./routes/router');
const path = require("path");
const mongoose = require('mongoose');
const cors = require("cors")

const app = express()

app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
// app.use(express.static("./public/uploads"))
app.use("/", router)

app.listen(3000, () => {
    try {
        mongoose.connect("mongodb://localhost:27017/productDB")
        console.log("server is listening at port 3000")
    } catch (error) {
        console.log("error:", error);
    }
})