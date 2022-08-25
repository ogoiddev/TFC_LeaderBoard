import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore

import chaiHttp = require('chai-http');
import { app } from '../app';
import ValidateJWT from '../utils/JWT/JWT.Validate';
import {authorization} from './mocks/authMock'
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

  })


});