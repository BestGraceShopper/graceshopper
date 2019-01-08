// const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

// created product table
// name, descirption, price, tags array, inventory #, image, and rating
const Product = db.define('product', {
 name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    // need to find and add default product image
    // also need to reference the image - where stored, etc
    defaultValue: 'default image'
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    validate:{
      min:0.01
    }
  },
  tags: {
    type:Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  },
  inventory: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    },
    defaultValue: 0
  },
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






// boilermaker code VVVVVVV
// /**
//  * instanceMethods
//  */
// User.prototype.correctPassword = function(candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt()) === this.password()
// }

// /**
//  * classMethods
//  */
// User.generateSalt = function() {
//   return crypto.randomBytes(16).toString('base64')
// }

// User.encryptPassword = function(plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

/**
 * hooks
 */
// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password(), user.salt())
//   }
// }

// User.beforeCreate(setSaltAndPassword)
// User.beforeUpdate(setSaltAndPassword)
