import { Request, Response } from 'express';
import { IHomeLeaderBoardController } from './interfaces/IHomeLeaderBoardController';
import { IHomeLeaderBoardUseCase } from './interfaces/IHomeLeaderBoardUseCase';

export default class HomeLeaderBoardController implements IHomeLeaderBoardController {
  constructor(private getBoard: IHomeLeaderBoardUseCase) {
    this.getBoardList = this.getBoardList.bind(this);
  }

  async getBoardList(_req: Request, res: Response) {
    const boardList = await this.getBoard.fillBoard();
    res.status(200).json(boardList);
  }
}
