const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('order', {
itemPrice: {
  type: Sequelize.DECIMAL(10,2),
},
totalPrice: {
  type: Sequelize.DECIMAL(10,2)
},
Comments: {
  type:Sequelize.STRING
}

})

module.exports = Orders


// productOrders has many orders
// pruductORders has many products





// order#     product#      quantity
  // 1           6          1
  // 1            2         2
  // 2          6           3
