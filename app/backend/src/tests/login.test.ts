import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
// @ts-ignore

import chaiHttp = require('chai-http');

import UserModel from '../database/models/UserModel';
import { UserMock } from './mocks/userMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('/login Route', () => {

  afterEach(()=>{
    sinon.restore();
  })
  
    it('should be able to login with right Body params', async () => {
      sinon.stub(UserModel, "findOne").resolves(UserMock as UserModel);
      
      const response = await chai.request(app).post('/login')
        .send({ email: 'admin@admin.com', password: 'secret_admin' })
      

      expect(response.status).to.equal(200)

    })

    it('should NOT be able to login with wrong Body params', async () => {
      sinon.stub(UserModel, "findOne").resolves(null);
      
      const response = await chai.request(app).post('/login')
        .send({ email: 'xablau@admin.com', password: 'secret_wrong' })
      
      
      expect(response.status).to.equal(401)

    })

    it('should NOT be able to login without email key params from the Body', async () => {
      sinon.stub(UserModel, "findOne").resolves(null);
      
      const response = await chai.request(app).post('/login')
        .send({ mail: 'admin@admin.com', password: 'secret_admin' })
      
      expect(response.status).to.equal(400)

    })

    it('should NOT be able to login without password key params from the Body', async () => {
      sinon.stub(UserModel, "findOne").resolves(null);
      
      const response = await chai.request(app).post('/login')
        .send({ email: 'admin@admin.com', pass: 'secret_admin' })
      
      expect(response.status).to.equal(400)

    })

});

// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { app } from '../app';
// import Example from '../database/models/ExampleModel';

// import { Response } from 'superagent';


// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Seu teste', () => {
//   /**
//    * Exemplo do uso de stubs com tipos
//    */

//   let chaiHttpResponse: Response;

//   before(async () => {
//     sinon
//       .stub(Example, "findOne")
//       .resolves({
//         ...<Seu mock>
//       } as Example);
//   });

//   after(()=>{
//     (Example.findOne as sinon.SinonStub).restore();
//   })

//   it('...', async () => {
//     chaiHttpResponse = await chai
//        .request(app)
//        ...

//     expect(...)
//   });

//   it('Seu sub-teste', () => {
//     expect(false).to.be.eq(true);
//   });
// });
