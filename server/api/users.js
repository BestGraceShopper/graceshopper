const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

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
        id: req.params.id,
      },
      attributes: ['id', 'email', 'address', 'phone'],
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
