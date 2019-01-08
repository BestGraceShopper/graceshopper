
const Sequelizer = require('sequelize')
const Product = require('./product')
const User = require('./user')
const ProductOrders = require('./productOrders')
// const {Product, ProductOrders, Order, User} = require('../models')


// Order.hasMany(Product, {through: ProductOrders})
// Product.belongsToMany(Order, {through: ProductOrders})


module.exports = {
  Product,
  // Order,
  User,
  ProductOrders,
}
