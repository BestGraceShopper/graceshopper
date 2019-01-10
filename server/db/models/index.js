const Product = require('./product')
const User = require('./user')
const UserOrdersProduct = require('./userOrdersProduct')
const UserOrder = require('./userOrder')

UserOrder.belongsTo(User, { as: 'user' })
UserOrdersProduct.belongsTo(UserOrder, { as: 'order' })
UserOrdersProduct.belongsTo(Product, { as: 'product' })

module.exports = {
  Product,
  User,
  UserOrdersProduct,
  UserOrder
}
