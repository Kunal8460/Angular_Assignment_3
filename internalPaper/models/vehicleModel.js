const mongoose = require("mongoose")
const Category = require("./categoryModel")
const VehicleSchema = mongoose.Schema({

    vehicleBrand: { type: String },
    categoryName: { type: String, ref: "category" },
    vehiclePicture: { type: String },
    deprication: { type: Number },
    price: { type: Number },
    noofyears: { type: Number },
    totalPrice: { type: Number }

})
const Vehicle = mongoose.model("vehicle", VehicleSchema)
module.exports = Vehicle