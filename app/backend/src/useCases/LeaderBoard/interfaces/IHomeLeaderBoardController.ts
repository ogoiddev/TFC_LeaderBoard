import { Request, Response } from 'express';

export interface IHomeLeaderBoardController {
  getBoardList(req: Request, res: Response): Promise<void>;
}
