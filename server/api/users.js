const router = require('express').Router()

const User = require('../db/models/user')
const UserOrder = require('../db/models/userOrder')
const UserOrdersProduct = require('../db/models/userOrdersProduct')

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       // explicitly select only the id and email fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ['id', 'email']
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })
//VVVVVV USER ROUTES VVVVVV
// NEEDS SECURITY

// get user info
router.get('/:id', async (req, res, next) => {
  try {
    if (req.user.id === Number(req.params.id)) {
      const users = await User.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['id', 'email', 'firstName', 'lastName', 'address', 'phone']
      })
      res.json(users)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})
// update info
router.put('/:id', async (req, res, next) => {
  const { id } = req.params
  const updatedUserInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    phone: req.body.phone
  }

  try {
    if (req.user.id === Number(req.params.id)) {
      const updatedUserID = await User.update(updatedUserInfo, {
        where: {
          id: id
        },
        returning: true,
        plain: true
      })

      if (!updatedUserID) {
        const err = Error('not found')
        err.status = 404
        throw err
      } else {
        res.json(updatedUserID)
      }
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

//VVVVVVVV USER CART ROUTES VVVVVVVVV
// return the current cart
router.get('/:id/cart', async (req, res, next) => {
  let { id } = req.params
  try {
    if (req.user.id === Number(req.params.id)) {
      const userOrder = await UserOrder.findOne({
        where: {
          userId: id,
          ordered: false
        }
      })
      res.json(userOrder)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

// create new empty cart
router.post('/:id/cart', async (req, res, next) => {
  const { id } = req.params
  // if no user id, then session ID will need to be used
  // need to verify no other carts exist - findorcreate
  try {
    if (req.user.id === Number(req.params.id)) {
      const userOrder = await UserOrder.findOrCreate({
        where: {
          ordered: false,
          userId: id
        },
        defaults: { totalPrice: 1 }
      })
      res.json(userOrder)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

// Purchase Cart
router.put('/:id/cart', async (req, res, next) => {
  const cart = req.body
  try {
    if (req.user.id === Number(req.params.id)) {
      const purchasedUserOrder = await UserOrder.update(
        {
          ordered: true
        },
        {
          where: {
            id: cart.orderId
          }
        }
      )

      if (!purchasedUserOrder) {
        const err = Error('Cart not found')
        err.status = 404
        throw err
      } else {
        res.status(200).json(purchasedUserOrder)
      }
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

// add to product to the cart post route
router.post('/:id/cart/product', async (req, res, next) => {
  const cart = req.body
  let quant
  if (cart.quantity === 0) {
    quant = 1
  }
  try {
    if (req.user.id === Number(req.params.id)) {
      let userOrdersProduct = await UserOrdersProduct.findOrCreate({
        where: {
          orderId: cart.orderId,
          productId: cart.productId
        },
        defaults: {
          quantity: quant
        }
      })
      if (!userOrdersProduct) {
        const err = Error('Cart not found')
        err.status = 404
        throw err
      }
      if (userOrdersProduct[1] === false) {
        if (cart.quantity === 0) {
          quant = userOrdersProduct[0].quantity + 1
        } else {
          quant = cart.quantity
        }

        let updatedUserOrdersProduct = await UserOrdersProduct.update(
          {
            quantity: quant
          },
          {
            where: {
              orderId: cart.orderId,
              productId: cart.productId
            }
          }
        )
        if (!updatedUserOrdersProduct) {
          const err = Error('Cart not found')
          err.status = 404
          throw err
        } else {
          res.json(updatedUserOrdersProduct)
        }
      } else {
        res.json(userOrdersProduct)
      }
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

// remove product from the order
router.delete('/:id/cart/product', async (req, res, next) => {
  const cart = req.body
  try {
    if (req.user.id === Number(req.params.id)) {
      const deletedUserOrdersProduct = await UserOrdersProduct.destroy({
        where: {
          orderId: cart.orderId,
          productId: cart.productId
        }
      })
      if (deletedUserOrdersProduct < 1) {
        const err = Error('Error: Cannot delete product')
        err.status = 404
        throw err
      } else {
        res.status(204).json(req.params.id)
      }
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

// VVVVVVV USER ORDER ROUTES VVVVVVVV
router.get('/:id/orders', async (req, res, next) => {
  const { id } = req.params
  try {
    if (req.user.id === Number(req.params.id)) {
      const userOrders = await UserOrder.findAll({
        where: {
          userId: id,
          ordered: true
        }
      })
      res.send(userOrders)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

// purchase route
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
