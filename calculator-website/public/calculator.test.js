const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Replace with your actual server file path

chai.use(chaiHttp);
const expect = chai.expect;

describe('Calculator API', () => {
  it('should add two numbers', (done) => {
    chai
      .request(app)
      .post('/add')
      .send({ num1: 5, num2: 7 }) // Adjust numbers as needed
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(12);
        done();
      });
  });

  // Add more test cases for other operations (subtract, multiply, divide, etc.)
});

