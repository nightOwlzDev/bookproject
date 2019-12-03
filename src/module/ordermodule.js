
const Order = require("../models/order");

module.exports = class ordermodule {
  constructor(id) {
    this._id = id;
  }

  async getOrder(req, res) {
    const order = await Order.find({});
    res.json(order);
  }

  async delOrder(req, res) {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.status(204).end();
  }

  async addOrder(req, res) {
    const payload = req.body;
    const order = new Order(payload);
    await order.save();
    res.status(201).end();
  }
};
