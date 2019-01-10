const Sequelize = require('sequelize')

const db = require('../db')

const ProductOrders = db.define('productOrder', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  comments: {
    type: Sequelize.TEXT
  }
})

module.exports = ProductOrders
