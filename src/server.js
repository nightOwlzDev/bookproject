const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Productmodule = require("./module/productmodule");
const Ordermodule = require("./module/ordermodule");
const app = express()

let cors = require('cors');
let productmodule = new Productmodule();
let ordermodule = new Ordermodule();

app.use(cors({ origin:'http://localhost:3000'}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

<<<<<<< HEAD
mongoose.connect("mongodb://localhost:27017/luvreadproject", { useNewUrlParser: true });
=======
mongoose.connect("mongodb://localhost:27017/luvreadproject", { useNewUrlParser: true })


app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})


app.post('/products', async (req, res) => {
    const payload = req.body
    const product = new Product(payload)
    await product.save()
    res.status(201).end()
})

// app.put('/products', async (req, res) => {
//     const payload = req.body
//     const product = new Product(payload)
//     await product.save()
//     res.status(201).end()
// })

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.status(204).end()
>>>>>>> 62fa308f0c63d561deadbaa44176daea71f41e15

// ดึงข้อมูล products ทั้งหมด
app.get("/products", productmodule.getProduct);

// ลบข้อมูล products ที่ต้องการ
app.delete("/products/:id", productmodule.delProduct);

// เพิ่มข้อมูล products 
app.post("/products", productmodule.addProduct);

// ดึงข้อมูล orders ทั้งหมด
app.get("/orders", ordermodule.getOrder);

// เพิ่มข้อมูล orders 
app.post("/orders", ordermodule.addOrder);

// ลบข้อมูล orders ที่ต้องการ
app.delete("/orders/:id", ordermodule.delOrder);


app.listen(9000, () => {
    console.log('Application is running on port 9000')
})