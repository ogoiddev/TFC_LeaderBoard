import * as express from 'express';
import TeamFactory from '../factories/TeamFactory';
import TeamListFactory from '../factories/TeamListFactory';

const TeamRouter = express.Router();

TeamRouter.get('/teams/:id', TeamFactory.team);

TeamRouter.get('/teams', TeamListFactory.list);

export default TeamRouter;
