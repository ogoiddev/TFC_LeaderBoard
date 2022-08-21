import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore

import chaiHttp = require('chai-http');
import { app } from '../app';
import ValidateJWT from '../utils/JWT/JWT.Validate';

chai.use(chaiHttp);

const { expect } = chai;
const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjA4ODExNjcsImV4cCI6MTY2MTQ4NTk2N30.wYAV3iBvof7A89E8lTyGSYOL2FJT_eEH3Q1trBvcvfc'

describe('/login/validate Route', () => {

  it('should return the role of the User', async () => {
    const response = await chai.request(app).get('/login/validate')
      .set('Authorization', authorization)
    
    const {role} = ValidateJWT.validateToken(authorization)
    
    expect(response.status).to.equal(200)
    expect({ role }).to.deep.equal({ role: 'admin'})

    sinon.restore()
  })

    it('should return an Error with wrong Auth', async () => {
    const response = await chai.request(app).get('/login/validate')
      .set('Authorization', 'wrong')
        
    expect(response.status).to.equal(401)

  })


});