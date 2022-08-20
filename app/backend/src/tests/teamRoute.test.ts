import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore

import chaiHttp = require('chai-http');
import { app } from '../app';

import Team from '../entities/Team'
import TeamModel from '../database/models/TeamModel'

chai.use(chaiHttp);

const { expect } = chai;

const teamList: Team[] = [
  {
    id: 1,
    teamName: "Avaí/Kindermann"
  },
  {
    id: 2,
    teamName: "Bahia"
  },
  {
    id: 3,
    teamName: "Botafogo"
  },
]

describe('/teams Route', () => {

  afterEach(() => {
    (TeamModel.findAll as sinon.SinonStub).restore();
  })

    it('should return a list of Teams', async () => {
      sinon.stub(TeamModel, "findAll").resolves(teamList as any);
      
      const response = await chai.request(app).get('/teams')
      
      expect(response.status).to.equal(200)
      expect(response.body).should.contains(teamList)

    })

    

});