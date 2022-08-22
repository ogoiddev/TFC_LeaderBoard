import { Request, Response } from 'express';
import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';

require('express-async-errors');

class MatchController {
  constructor(private matches: IMatchRepository) { }

  async getMatches(_req: Request, res: Response) {
    const matches = await this.matches.getAll();
    res.status(200).json(matches);
  }

  async getMatch(req: Request, res: Response) {
    const { id } = req.params;
    const match = await this.matches.getById(Number(id));
    res.status(200).json(match);
  }

  async saveNewMatch(req: Request, res: Response) {
    const newMatch = req.body;
    const match = await this.matches.saveNewMatch(newMatch);
    res.status(201).json(match);
  }
}

export default MatchController;
