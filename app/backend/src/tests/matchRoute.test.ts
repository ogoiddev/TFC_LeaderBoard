import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
// @ts-ignore

import chaiHttp = require('chai-http');

import { Model } from 'sequelize/types';
import MatchModel from '../database/models/MatchModel';
import { authorization } from './mocks/authMock';
import { MatchToSaveDTOMock } from './mocks/matchDTOMock';
import { matchesWithTeamNameMock } from './mocks/matchesWithTeamNameMock';
import { matchMock } from './mocks/matchMock';
import UserModel from '../database/models/UserModel';
import { UserMock } from './mocks/userMock';
chai.use(chaiHttp);

const { expect } = chai;



describe('/Match Route', () => {

  // afterEach(() => {
  //   (MatchModel.findAll as sinon.SinonStub).restore();
  // })

    it('should return a list of Matches', async () => {
      sinon.stub(MatchModel, "findAll").returns(matchesWithTeamNameMock as any);
      
      const response = await chai.request(app).get('/matches')
      
      expect(response.status).to.equal(200)

      expect(response.body).to.have.deep.members(matchesWithTeamNameMock)

      sinon.restore()
    })
  
    it('should return a Match, search by ID', async () => {
      sinon.stub(UserModel, "findOne").resolves(UserMock as UserModel);
      
      const response = await chai.request(app).get('/matches/1')
      
      expect(response.status).to.equal(200)

      sinon.restore()
    })
  
    it('should save a new Match', async () => {
      sinon.stub(UserModel, "findOne").resolves(UserMock as UserModel);
      
      const responseLogin = await chai.request(app).post('/login')
        .send({ email: 'admin@admin.com', password: 'secret_admin' })

      sinon.stub(MatchModel, "create").resolves(matchMock as MatchModel)

        const response = await chai.request(app)
          .post('/matches')
          .send(MatchToSaveDTOMock).set('authorization', responseLogin.body.token);
      
      expect(response.status).to.equal(201)

      sinon.restore()
    })
  
    it('should update a Match by ID', async () => {
      sinon.stub(MatchModel, "update").resolves()

      const response = await chai.request(app)
          .patch('/matches/:id/finish')
      
      expect(response.status).to.equal(200)

      sinon.restore()
    })

    

});