
const Product = require("../models/product");

module.exports = class productmodule {
  constructor(id) {
    this._id = id;
  }

  async getProduct(req, res) {
    const products = await Product.find({});
    res.json(products);
  }

  async getProductByid(req, res) {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.json(products);
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const payload = req.body;

    await Product.findByIdAndUpdate( id , payload ,{new: true}).then((data) =>{
        if(data === null){
            throw new Error('Cat Not Found');
        }
        res.json({ message: 'Cat updated!' })
    }).catch( (error) => {
        res.status(500).json({ message: 'Some Error!' })
        console.log(error);
    })
    
  }

  
  async delProduct(req, res) {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204).end();
  }

  async addProduct(req, res) {
      const payload = req.body;
      const product = new Product(payload);
      await product.save();
      res.status(201).end();
  }

};


