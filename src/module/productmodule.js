
const Product = require("../models/product");

module.exports = class productmodule {
  constructor(id) {
    this._id = id;
  }

  async getProduct(req, res) {
    const products = await Product.find({});
    res.json(products);
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


