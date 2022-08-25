import { Router } from 'express';
import { toAwayLeaderBoard, toFullLeaderBoard, toHomeLeaderBoard } from '../factories';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/leaderboard/home', toHomeLeaderBoard.getBoardList);

LeaderBoardRouter.get('/leaderboard/away', toAwayLeaderBoard.getBoardList);

LeaderBoardRouter.get('/leaderboard', toFullLeaderBoard.getBoardList);

export default LeaderBoardRouter;
