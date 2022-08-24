import { Router } from 'express';
import { toLeaderBoard } from '../factories';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/leaderboard/home', toLeaderBoard.getBoardList);

export default LeaderBoardRouter;
