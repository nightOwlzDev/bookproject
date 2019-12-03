const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    orderedDate: String,
    totalPrice: Number,
    orders: [
      {
        product: {
          productId: String,
          productName: String,
          unitPrice: String,
          thumbnail: String
        },
        quantity: String
      }
    ]
  },
  { versionKey: false }
);

const OrderModel = mongoose.model('orders', orderSchema)

module.exports = OrderModel