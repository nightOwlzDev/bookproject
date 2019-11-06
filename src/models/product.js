const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    id: Number,
    productId: String,
    productName: String,
    unitPrice: String,
    thumbnail: String
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel