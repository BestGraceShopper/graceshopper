'use strict'

const db = require('../server/db')
const User = require('../server/db/models/user')
const Product = require('../server/db/models/product')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      firstName: 'Cody',
      lastName: 'Code',
      password: '123'
    }),
    User.create({
      email: 'murphy@email.com',
      firstName: 'Murphy',
      lastName: 'Murph',
      password: '123'
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Baby Blue Sock',
      description: "It's a sock. For your baby. Note: Only includes one sock.",
      imageUrl:
        'https://assets.marthastewart.com/styles/wmax-570/d15/blue-baby-socks/blue-baby-socks_0_sq.jpg?itok=4TgWrMi3',
      price: 30,
      inventory: 20
    }),
    Product.create({
      name: 'Diaper Loading Onesie',
      description: 'Full diaper imminent.',
      imageUrl: 'https://i.ebayimg.com/images/g/pwIAAOSwx2dYGWq0/s-l300.jpg',
      price: 199,
      inventory: 15
    }),
    Product.create({
      name: 'Baby Duckie Bibs',
      description: 'Quack Quack for a baby duckling',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61h%2BvoKhdJL._SL1000_.jpg',
      price: 10.0,
      tags: ['Bib', 'duckie', 'yellow'],
      inventory: 15
    }),
    Product.create({
      name: 'Pair of Pacifiers',
      description: 'Baby pacifier so you and your child can sleep peacefully',
      imageUrl:
        'https://www.todaysparent.com/wp-content/uploads/2017/02/playtex-baby-binky-silicon-pacifier-TPA-1280x960.jpg',
      price: 5.0,
      tags: ['Pacifier', 'set', 'of', 'two'],
      inventory: 15
    })
    // Product.create({
    //   name: '',
    //   description: '',
    //   imageUrl: '',
    //   price: 0.0,
    //   tags: [''],
    //   inventory: 15
    // })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
