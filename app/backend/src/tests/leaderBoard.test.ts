import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
// @ts-ignore

import chaiHttp = require('chai-http');

import { Model } from 'sequelize/types';
import MatchModel from '../database/models/MatchModel';
import TeamModel from '../database/models/TeamModel';
chai.use(chaiHttp);

const { expect } = chai;



describe('/LeaderBoard Route', () => {

  // afterEach(() => {
  //   (MatchModel.findAll as sinon.SinonStub).restore();
  // })

    it('should return a Full LeaderBoard', async () => {
      sinon.stub(MatchModel, "findAll").resolves({} as Model[]);
      sinon.stub(TeamModel, "findAll").resolves({} as Model[]);
      
      const response = await chai.request(app).get('/leaderboard')
      
      expect(response.status).to.equal(200)
    })
    sinon.restore()
    

});