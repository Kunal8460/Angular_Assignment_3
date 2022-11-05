const router = require("express").Router()
const upload = require("../config/imageUpload")
const { Products, Categories } = require("../models/models")

router.get("/getAllProducts", async (req, res) => {

    try {
        const allProducts = await Products.find({})
        res.json(allProducts)
    } catch (error) {
        console.log(error)
    }
}).get("/getProduct/:id", async (req, res) => {

    const product = await Products.findById({ _id: req.params.id })
    res.json(product)
})

router.post("/addProduct", async (req, res) => {
    try {
        const response = await Products.create(req.body)
        res.json(response)
    } catch (error) {
        console.log("Error Adding Product", error)
    }
})
router.delete("/deleteProduct/:id", async (req, res) => {
    try {
        const { id } = req.params
        const response = await Products.findByIdAndDelete({ _id: id })
        res.json(response)
    } catch (error) {
        console.log("Error Deleting Product", error)
    }
})
router.put("/updateProduct/:id", async (req, res) => {
    try {
        const { id } = req.params
        const response = await Products.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.json(response)
    } catch (error) {
        console.log("Error Deleting Product", error)
    }
})
module.exports = router