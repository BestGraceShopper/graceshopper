/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('instanceMethods', () => {
    describe('UsernameNeeded', () => {
      let cody

      beforeEach(async () => {
        cody = await Product.create({
          name: 'Pair of Pacifiers',
          description:
            'Baby pacifier so you and your child can sleep peacefully',
          imageUrl:
            'https://www.todaysparent.com/wp-content/uploads/2017/02/playtex-baby-binky-silicon-pacifier-TPA-1280x960.jpg',
          price: 5.0,
          tags: ['Pacifier', 'set', 'of', 'two'],
          inventory: 15
        })
      })

      it('returns true if name is filled', () => {
        expect(cody.UsernameNeeded('Pair of Pacifiers')).to.be.equal(true)
      })

      it('returns false if there is no input', () => {
        expect(cody.correctPassword('')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
