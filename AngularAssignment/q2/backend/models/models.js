const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    prodName: { type: String },
    prodPrice: { type: Number },
    prodDesc: { type: String },
    prodImage: { type: String },
    prodCategory: { type: String }
})

const categorySchema = mongoose.Schema({
    categoryName: { type: String }
})

const Products = mongoose.model("products", productSchema)
const Categories = mongoose.model("categories", categorySchema)

module.exports = { Products, Categories }