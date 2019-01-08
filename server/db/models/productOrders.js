const Sequelize = require('sequelize')

const db = require('../db')

const ProductOrders = db.define('productOrder', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  comments: {
    type: Sequelize.STRING
  }
})

module.exports = ProductOrders


// productOrders has many orders
// pruductORders has many products





// order#     product#      quantity
  // 1           6          1
  // 1            2         2
  // 2          6           3
