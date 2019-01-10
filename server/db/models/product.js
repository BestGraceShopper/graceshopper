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
    // need to find and add default product image
    defaultValue: 'default image'
  },
  price: {
    // change price into pennies
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0.01
    }
  },
  tags: {
    // tags ARR not good practice
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  },
  inventory: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
  // rating: {
  //   type: Sequelize.FLOAT,
  //   defaultValue: 3.5
  // }
})

module.exports = Product

// // inventory update method?
// User.findById(1).then(user => {
//   return user.decrement('my-integer-field', {by: 2})
// }).then(user => {
//   // Postgres will return the updated user by default (unless disabled by setting { returning: false })
//   // In other dialects, you'll want to call user.reload() to get the updated instance...
// })
