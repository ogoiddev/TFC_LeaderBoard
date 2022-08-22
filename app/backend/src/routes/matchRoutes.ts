import * as express from 'express';
import SaveNewMatchFactory from '../factories/SaveNewMatchFactory';
import MatchFactory from '../factories/MatchFactory';
import MatchListFactory from '../factories/MatchListFactory';

const MatchRouter = express.Router();

MatchRouter.get('/matches/:id', MatchFactory.match);

MatchRouter.get('/matches', MatchListFactory.list);

MatchRouter.post('/matches', SaveNewMatchFactory.save);

export default MatchRouter;
