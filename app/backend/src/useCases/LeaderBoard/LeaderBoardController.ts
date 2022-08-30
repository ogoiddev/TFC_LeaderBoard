import { Request, Response } from 'express';
import AwayLeaderBoardUseCase from './AwayLeaderBoardUseCase';
import FullLeaderBoardUseCase from './FullLeaderBoardUseCase';
import HomeLeaderBoardUseCase from './HomeLeaderBoardUseCase';

export default class LeaderBoardController {
  constructor(
    private fullBoard: FullLeaderBoardUseCase,
    private homeBoard: HomeLeaderBoardUseCase,
    private awayBoard: AwayLeaderBoardUseCase,
  ) { }

  public getFullBoard = async (_req: Request, res: Response) => {
    const boardList = await this.fullBoard.fillLeaderBoard();
    res.status(200).json(boardList);
  };

  public getHomeBoard = async (_req: Request, res: Response) => {
    const boardList = await this.homeBoard.fillLeaderBoard();
    res.status(200).json(boardList);
  };

  public getAwayBoard = async (_req: Request, res: Response) => {
    const boardList = await this.awayBoard.fillLeaderBoard();
    res.status(200).json(boardList);
  };
}
