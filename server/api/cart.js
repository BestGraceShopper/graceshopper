const router = require('express').Router()
const UserOrder = require('../db/models/userOrder')
const UserOrdersProduct = require('../db/models/userOrdersProduct')

router.put('/user/:id/:method', async (req, res, next) => {
  try {
    let { method, id } = req.params
    const cart = req.body
    console.log('this is our cart: ', cart)
    let ordered

    if (id === 'guest') id = null

    if (method === 'savecart') {
      ordered = false
    } else if (method === 'purchase') {
      ordered = true
    }

    const order = await UserOrder.create({
      ordered: ordered,
      totalPrice: 1,
      userId: id
    })

    cart.map(async product => {
      let orderItem = await UserOrdersProduct.create({
        quantity: 1,
        orderId: order.id,
        productId: product.id
      })
    })

    res.status(200).json('success!')
  } catch (err) {
    next(err)
  }
})

module.exports = router
