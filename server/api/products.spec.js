/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/products/', () => {
    const babyBottle = 'Pair of Pacifiers'

    beforeEach(() => {
      return Product.create({
        name: 'Pair of Pacifiers',
        description: 'Baby pacifier so you and your child can sleep peacefully',
        imageUrl:
          'https://www.todaysparent.com/wp-content/uploads/2017/02/playtex-baby-binky-silicon-pacifier-TPA-1280x960.jpg',
        price: 5.0,
        tags: ['Pacifier', 'set', 'of', 'two'],
        inventory: 15
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(babyBottle)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
