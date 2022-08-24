import { Request, Response } from 'express';
import HomeLeaderBoardUseCase from './HomeLeaderBoardUseCase';
import { IHomeLeaderBoardController } from './interfaces/IHomeLeaderBoardController';

export default class HomeLeaderBoardController implements IHomeLeaderBoardController {
  constructor(private getBoard: HomeLeaderBoardUseCase) {
    this.getBoardList = this.getBoardList.bind(this);
  }

  async getBoardList(_req: Request, res: Response) {
    const boardList = await this.getBoard.fillBoard();
    res.status(200).json(boardList);
  }
}
