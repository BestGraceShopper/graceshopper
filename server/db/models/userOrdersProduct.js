const Sequelize = require('sequelize')

const db = require('../db')

const UserOrdersProduct = db.define('userOrdersProducts', {
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = UserOrdersProduct
