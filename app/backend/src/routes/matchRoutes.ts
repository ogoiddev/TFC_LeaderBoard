import { Request, Response, Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import { toMatches } from '../factories';

const MatchRouter = Router();

MatchRouter.get(
  '/matches/:id',
  (req: Request, res: Response) => toMatches.getById(req, res),
);

MatchRouter.get(
  '/matches',
  (req: Request, res: Response) => toMatches.getAll(req, res),
);

MatchRouter.patch(
  '/matches/:id/finish',
  (req: Request, res: Response) => toMatches.updateMatchStatus(req, res),
);

MatchRouter.post(
  '/matches',
  authMiddleware.checkAuth,
  (req: Request, res: Response) => toMatches.saveNewMatch(req, res),
);

export default MatchRouter;
