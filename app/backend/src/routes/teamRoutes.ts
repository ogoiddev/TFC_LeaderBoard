import { Router } from 'express';
import Team from '../useCases/Team';

const TeamRouter = Router();

TeamRouter.get('/teams/:id', Team.teamController.getById);

TeamRouter.get('/teams', Team.teamController.getAll);

export default TeamRouter;
