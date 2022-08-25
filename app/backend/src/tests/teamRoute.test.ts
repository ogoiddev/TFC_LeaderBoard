import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
// @ts-ignore

import chaiHttp = require('chai-http');

import { Model } from 'sequelize/types';
import TeamModel from '../database/models/TeamModel';
import { teamList } from './mocks/teamsMock';

chai.use(chaiHttp);

const { expect } = chai;



describe('/teams Route', () => {

  // afterEach(() => {
  //   (TeamModel.findAll as sinon.SinonStub).restore();
  // })

    it('should return a list of Teams', async () => {
      sinon.stub(TeamModel, "findAll").returns(teamList as any);
      
      const response = await chai.request(app).get('/teams')
      
      expect(response.status).to.equal(200)   

      expect(response.body).to.have.deep.members(teamList)

      sinon.restore()
    })
  
    it('should return a Team search by ID', async () => {
      sinon.stub(TeamModel, "findOne").resolves({} as Model);
      
      const response = await chai.request(app).get('/teams/2')
      
      expect(response.status).to.equal(200)

      sinon.restore()
    })

    

});