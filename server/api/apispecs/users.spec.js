const { expect } = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/users/', () => {
    let user1
    let user2
    beforeEach(() => {
      let promise1 = User.create({
        email: 'cody@email.com',
        firstName: 'Cody',
        lastName: 'Code',
        password: '123'
      })
      let promise2 = User.create({
        email: 'murphy@email.com',
        firstName: 'Murphy',
        lastName: 'Murph',
        password: '123'
      })
      return Promise.all([promise1, promise2]).then(results => {
        ;[user1, user2] = results
      })
    })
    describe('GET requests: ', () => {
      it('/api/users', () => {
        return request(app)
          .get('/api/users/')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('array')
            expect(res.body).to.have.lengthOf(2)
          })
      })
      it('/api/users/:id', () => {
        return request(app)
          .get('/api/users/' + user1.id)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body.firstName).to.be.equal(user1.firstName)
            expect(res.body.email).to.be.equal(user1.email)
          })
      })
      it('/api/users/:id', () => {
        return request(app)
          .get('/api/users/' + user2.id)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body.lastName).to.be.equal(user2.lastName)
            expect(res.body.email).to.be.equal(user2.email)
          })
      })
    })
    describe('POST /users', function() {
      it('can create a user', () => {
        return request(app)
          .post('/api/users')
          .send({
            firstName: 'John',
            lastName: 'Jones',
            email: 'johnny@ufc.com',
            password: 'fighter'
          })
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body.id).to.not.be.an('undefined')
            expect(res.body.firstName).to.equal('John')
          })
      })
    })
  })
})
