const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// import config from './config/config';
const Product = require('./models/product')
const Order = require('./models/order')
const app = express()
var cors = require('cors');

app.use(cors({ origin:'http://localhost:3000'}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/luvreadproject", { useNewUrlParser: true })


app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.status(204).end()

})

app.get('/orders', async (req, res) => {
    const order = await Order.find({})
    res.json(order)
})


app.post('/orders', async (req, res) => {
    const payload = req.body
    const order = new Order(payload)
    await order.save()
    res.status(201).end()
})


app.delete('/orders/:id', async (req, res) => {
    const { id } = req.params
    await Order.findByIdAndDelete(id)
    res.status(204).end()

  })

app.listen(9000, () => {
    console.log('Application is running on port 9000')
})