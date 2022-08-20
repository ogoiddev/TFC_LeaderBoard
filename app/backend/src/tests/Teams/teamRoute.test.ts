import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore

import chaiHttp = require('chai-http');
import { app } from '../../app';

import { Model } from 'sequelize/types';

chai.use(chaiHttp);

const { expect } = chai;

const teamList = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
]

describe('/teams Route', () => {

  // afterEach(() => {
  //   (UserModel.findOne as sinon.SinonStub).restore();
  // })

    it('should return a list of Teams', async () => {
      // sinon.stub(UserModel, "findOne").resolves(teamList as Model);
      
      const response = await chai.request(app).post('/teams')
      
      expect(response.status).to.equal(200)

    })

    

});