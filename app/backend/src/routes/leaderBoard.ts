import { Router } from 'express';
import Boards from '../useCases/LeaderBoard';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/leaderboard/home', Boards.getHomeBoard);

LeaderBoardRouter.get('/leaderboard/away', Boards.getAwayBoard);

LeaderBoardRouter.get('/leaderboard', Boards.getFullBoard);

export default LeaderBoardRouter;
