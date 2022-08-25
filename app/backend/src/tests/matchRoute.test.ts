import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
// @ts-ignore

import chaiHttp = require('chai-http');

import { Model } from 'sequelize/types';
import MatchModel from '../database/models/MatchModel';
import { authorization } from './mocks/authMock';
import { MatchToSaveDTOMock } from './mocks/matchDTOMock';
import { matchesMock } from './mocks/matchesMock';
chai.use(chaiHttp);

const { expect } = chai;



describe('/Match Route', () => {

  // afterEach(() => {
  //   (MatchModel.findAll as sinon.SinonStub).restore();
  // })

    it('should return a list of Matches', async () => {
      sinon.stub(MatchModel, "findAll").returns(matchesMock as any);
      
      const response = await chai.request(app).get('/matches')
      
      expect(response.status).to.equal(200)

      expect(response.body).to.have.deep.members(matchesMock)

      sinon.restore()
    })
  
    it('should return a Match, search by ID', async () => {
      sinon.stub(MatchModel, "findOne").resolves({} as Model);
      
      const response = await chai.request(app).get('/matches/2')
      
      expect(response.status).to.equal(200)

      sinon.restore()
    })
  
    it('should save a new Match', async () => {
      sinon.stub(MatchModel, "create").resolves({} as Model)
        const response = await chai.request(app)
          .post('/matches')
          .send(MatchToSaveDTOMock).set('authorization', authorization);
      
      expect(response.status).to.equal(201)

      sinon.restore()
    })
  
    it('should update a Match by ID', async () => {
      sinon.stub(MatchModel, "update").resolves()
        const response = await chai.request(app)
          .patch('/matches/:id/finish')
          .set('authorization', authorization);
      
      expect(response.status).to.equal(200)

      sinon.restore()
    })

    

});