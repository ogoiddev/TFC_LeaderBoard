import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import Match from '../useCases/Match';

const MatchRouter = Router();

MatchRouter.get('/matches/:id', Match.matchController.getById);

MatchRouter.get('/matches?', Match.matchController.getByStatusWithTeamName);

MatchRouter.patch('/matches/:id/finish', Match.matchController.updateMatchStatus);

MatchRouter.patch('/matches/:id', Match.matchController.updateMatchScore);

MatchRouter.post('/matches', authMiddleware.checkAuth, Match.matchController.saveNewMatch);

export default MatchRouter;
