import { Router } from 'express';
import LoginRouter from './loginRoute';
import TeamRouter from './teamRoutes';
import MatchRouter from './matchRoutes';
import LeaderBoardRouter from './leaderBoard';

const Routes = Router();

Routes.use(LoginRouter);
Routes.use(TeamRouter);
Routes.use(MatchRouter);
Routes.use(LeaderBoardRouter);

export default Routes;
