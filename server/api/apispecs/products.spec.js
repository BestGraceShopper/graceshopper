/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/products/', () => {
    let product1
    let product2
    beforeEach(() => {
      let promise1 = Product.create({
        name: 'Pair of Pacifiers',
        description: 'Baby pacifier so you and your child can sleep peacefully',
        imageUrl:
          'https://www.todaysparent.com/wp-content/uploads/2017/02/playtex-baby-binky-silicon-pacifier-TPA-1280x960.jpg',
        price: 5.0,
        inventory: 15
      })
      let promise2 = Product.create({
        name: 'Diaper Loading Onesie',
        description: 'Full diaper imminent.',
        imageUrl: 'https://i.ebayimg.com/images/g/pwIAAOSwx2dYGWq0/s-l300.jpg',
        price: 199,
        inventory: 15
      })
      return Promise.all([promise1, promise2]).then(results => {
        ;[product1, product2] = results
      })
    })
    describe('GET requests: ', () => {
      it('/api/products', () => {
        return request(app)
          .get('/api/products')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('array')
            expect(res.body).to.have.lengthOf(2)
          })
      })
      it('/api/products/:id', () => {
        return request(app)
          .get('/api/products/' + product1.id)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body.name).to.be.equal(product1.name)
            expect(res.body.description).to.be.equal(product1.description)
          })
      })
      it('/api/products/:id', () => {
        return request(app)
          .get('/api/products/' + product2.id)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body.name).to.be.equal(product2.name)
            expect(res.body.description).to.be.equal(product2.description)
          })
      })
    })
  })
})
