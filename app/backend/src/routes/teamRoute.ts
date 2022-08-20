import * as express from 'express';
import TamListFactory from '../factories/TeamListFactory';

const TeamListRouter = express.Router();

TeamListRouter.get('/teams', TamListFactory.list);

export default TeamListRouter;
