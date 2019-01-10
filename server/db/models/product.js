const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/images/product-image-placeholder.jpg'
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = Product

// // inventory update method?
// User.findById(1).then(user => {
//   return user.decrement('my-integer-field', {by: 2})
// }).then(user => {
//   // Postgres will return the updated user by default (unless disabled by setting { returning: false })
//   // In other dialects, you'll want to call user.reload() to get the updated instance...
// })
