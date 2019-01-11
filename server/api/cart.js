const router = require('express').Router()
const UserOrder = require('../db/models/userOrder')
const UserOrdersProduct = require('../db/models/userOrdersProduct')

router.put('/user/:id/:method', async (req, res, next) => {
  try {
    let { method, id } = req.params
    const cart = req.body
    if (id === 'guest') id = null
    if (method === 'savecart') {
      //save cart
    } else if (method === 'purchase') {
      const order = await UserOrder.create({
        ordered: true,
        totalPrice: 1,
        userId: id
      })
      cart.map(product => {
        UserOrdersProduct.create({
          quantity: 1,
          orderId: order.id,
          productId: product.id
        })
      })
    }

    res.status(200).json('success!')
  } catch (err) {
    next(err)
  }
})

module.exports = router
