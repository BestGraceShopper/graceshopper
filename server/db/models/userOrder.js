const Sequelize = require('sequelize')

const db = require('../db')

const UserOrder = db.define('userOrders', {
  ordered: {
    type: Sequelize.BOOLEAN
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
      min: 1
    }
  }
})

module.exports = UserOrder
