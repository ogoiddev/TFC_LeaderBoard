import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore

import chaiHttp = require('chai-http');
import { app } from '../app';

import Team from '../entities/Team'
import TeamModel from '../database/models/TeamModel'
import { teamList } from './mocks/teamsMock'
import { Model } from 'sequelize/types';

chai.use(chaiHttp);

const { expect } = chai;



describe('/teams Route', () => {

  // afterEach(() => {
  //   (TeamModel.findAll as sinon.SinonStub).restore();
  // })

    it('should return a list of Teams', async () => {
      sinon.stub(TeamModel, "findAll").resolves(teamList as any);
      
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