const express = require('express');
const router = express.Router()
const Vehicle = require("../models/vehicleModel")
const Category = require("../models/categoryModel")
const upload = require("../config/imageUpload")

router.get("/", async (req, res) => {

    const allVehicles = await Vehicle.find({})
    res.render("index", { allVehicles })

}).get("/insert", async (req, res) => {

    const categories = await Category.find({})
    res.render("insert", { categories })
})
router.post("/create", upload.single('vehiclePicture'), async (req, res) => {

    const newTotalPrice = calculateDeprication(req.body.price, req.body.deprication, req.body.noofyears)
    // console.log(req.file)
    const newVehicle = new Vehicle({
        vehicleBrand: req.body.brand,
        categoryName: req.body.categoryName,
        price: req.body.price,
        noofyears: req.body.noofyears,
        deprication: req.body.deprication,
        totalPrice: newTotalPrice,
        vehiclePicture: req.file.filename
    })
    // console.log(req.body)
    // console.log(newVehicle);
    const saved = await Vehicle.create(newVehicle)
    res.redirect("/")
})

function calculateDeprication(totalPrice, deprication, years) {
    let amount = totalPrice
    for (let i = 0; i < years; i++) {
        let depricatedAmount = (amount) * (deprication / 100)
        amount -= depricatedAmount
    }
    return amount
}



module.exports = router