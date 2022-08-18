import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore

import chaiHttp = require('chai-http');
import { app } from '../app';

import UserModel from '../database/models/UserModel';
import { Model } from 'sequelize/types';

chai.use(chaiHttp);

const { expect } = chai;

describe('Should be able to login', () => {

    it('should be able to login with tha right params', async () => {
      sinon.stub(UserModel, "findOne").resolves({} as Model);
      
      const response = await chai.request(app).post('/login')
      
      expect(response.status).to.equal(200)

      sinon.restore();
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
