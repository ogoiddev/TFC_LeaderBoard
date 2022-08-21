import { Request, Response } from 'express';
import { IMatchUseCase } from './interfaces/IMatchUseCase';

require('express-async-errors');

class MatchController {
  constructor(private matches: IMatchUseCase) { }

  async getMatches(_req: Request, res: Response) {
    const matches = await this.matches.queryAll();
    res.status(200).json(matches);
  }

  async getMatch(req: Request, res: Response) {
    const { id } = req.params;
    const match = await this.matches.queryById(Number(id));
    res.status(200).json(match);
  }
}

export default MatchController;
