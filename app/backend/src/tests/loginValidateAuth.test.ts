import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
import { authorization } from './mocks/authMock';
// @ts-ignore

import chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;


describe('/login/validate Route', () => {

  it('should return the role of the User', async () => {
    const response = await chai.request(app).get('/login/validate')
      .set('authorization', authorization)
    
    expect(response.status).to.equal(200)
    expect(response.body).to.deep.equal({ role: 'admin'})

    sinon.restore()
  })

    it('should return an Error with wrong Auth', async () => {
    const response = await chai.request(app).get('/login/validate')
      .set('Authorization', 'wrong')
        
    expect(response.status).to.equal(401)
    sinon.restore()
  })


});