const router = require('express').Router()

const Product = require('../db/models/product')

module.exports = router
//api/products/:id
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findById(req.params.id)
    console.log(singleProduct)
    res.json(singleProduct)
  } catch (err) {
    next(err)
  }
})
