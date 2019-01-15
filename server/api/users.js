const router = require('express').Router()
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const User = require('../db/models/user')
const UserOrder = require('../db/models/userOrder')
const UserOrdersProduct = require('../db/models/userOrdersProduct')

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const users = await User.findOne({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      where: {
        id: req.params.id
      },
      attributes: ['id', 'email', 'firstName', 'lastName', 'address', 'phone']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// purchase route
router.post('/:id/cart/charge', async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })

    res.json({ status })
  } catch (err) {
    res.status(500).end()
  }
})

router.put('/:id/cart', async (req, res, next) => {
  try {
    let { id } = req.params
    const cart = req.body
    if (id === 'guest') id = null

    const order = await UserOrder.create({
      ordered: true,
      totalPrice: 1,
      userId: id
    })

    let orderResults = await Promise.all(
      cart.map(async product => {
        let orderItem = await UserOrdersProduct.create({
          quantity: 1,
          orderId: order.id,
          productId: product.id
        })
        return orderItem
      })
    )

    res.status(200).json(orderResults)
  } catch (err) {
    next(err)
  }
})

module.exports = router
