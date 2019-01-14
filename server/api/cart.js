const router = require('express').Router()
const UserOrder = require('../db/models/userOrder')
const UserOrdersProduct = require('../db/models/userOrdersProduct')

router.put('/user/:id/:method', async (req, res, next) => {
  // CG: req.body.method? maybe?
  // Forseeable problems ahead:
  // /api/users/:userId/cart
  // componentDidUpdate() --> when I get the userId then call getCart();
  // /cart (implies that its you.) -- req.user.
  try {
    let { method, id } = req.params
    const cart = req.body
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

    /*
    CG: Suggested catch for potential error. 
    let orderResults = await Promise.all(cart.map(async product => {
      let orderItem = await UserOrdersProduct.create({
        quantity: 1,
        orderId: order.id,
        productId: product.id
      })
      return orderItem;
    }))

    */ 
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
