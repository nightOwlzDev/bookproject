const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderedDate: String,
    totalPrice: Number,
    orders: String,
    id: Number
})

const OrderModel = mongoose.model('orders', orderSchema)

module.exports = OrderModel