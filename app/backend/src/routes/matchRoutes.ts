import * as express from 'express';
import MatchFactory from '../factories/MatchFactory';
import MatchListFactory from '../factories/MatchListFactory';

const MatchRouter = express.Router();

MatchRouter.get('/matches/:id', MatchFactory.match);

MatchRouter.get('/matches', MatchListFactory.list);

export default MatchRouter;
