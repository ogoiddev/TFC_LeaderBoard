import { Router } from 'express';
import LoginRouter from './loginRoute';
import TeamRouter from './teamRoutes';
import MatchRouter from './matchRoutes';

const Routes = Router();

Routes.use(LoginRouter);
Routes.use(TeamRouter);
Routes.use(MatchRouter);

export default Routes;
