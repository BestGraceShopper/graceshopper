const router = require('express').Router()
const UserOrder = require('../db/models/userOrder')
const UserOrdersProduct = require('../db/models/userOrdersProduct')

router.post('/guest', async (req, res, next) => {
  try {
    const cart = req.body
    const order = await UserOrder.create({
      ordered: false,
      totalPrice: 1,
      userId: null
    })
    cart.map(product => {
      UserOrdersProduct.create({
        quantity: 1,
        orderId: order.id,
        productId: product.id
      })
    })
    res.json('success!')
  } catch (err) {
    next(err)
  }
})

module.exports = router
