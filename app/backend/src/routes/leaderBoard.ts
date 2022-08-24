import { Router } from 'express';
import { toLeaderBoard } from '../factories';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/leaderboard/home', toLeaderBoard.getBoardList);
LeaderBoardRouter.get('/leaderboard/away', toLeaderBoard.getBoardList);
LeaderBoardRouter.get('/leaderboard/', toLeaderBoard.getBoardList);

export default LeaderBoardRouter;
