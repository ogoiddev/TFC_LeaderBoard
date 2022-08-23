import { Request, Response, Router } from 'express';
import { toTeams } from '../factories';

const TeamRouter = Router();

TeamRouter.get(
  '/teams/:id',
  (req: Request, res: Response) => toTeams.getById(req, res),
);

TeamRouter.get(
  '/teams',
  (req: Request, res: Response) => toTeams.getAll(req, res),
);

export default TeamRouter;
