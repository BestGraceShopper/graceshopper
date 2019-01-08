
const Sequelizer = require('sequelize')
const {Product, ProductOrders, Order, User} = require('../db')


Order.hasMany(Product, {through: ProductOrders})
Product.belongsToMany(Order, {through: ProductOrders})


module.exports = {
  Product,
  Order,
  ProductOrders,
}
