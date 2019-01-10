const {Product, User, ProductOrders} = require('../models')

// Order.hasMany(Product, {through: ProductOrders})
// Product.belongsToMany(Order, {through: ProductOrders})

module.exports = {
  Product,
  // Order,
  User,
  ProductOrders
}
