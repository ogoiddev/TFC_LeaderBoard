import { Request, Response } from 'express';
import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';
import { ITeamController } from '../Team/interfaces/ITeamController';

require('express-async-errors');

class MatchController implements ITeamController {
  constructor(private matches: IMatchRepository) { }

  async getAll(_req: Request, res: Response) {
    const matches = await this.matches.getAll();
    res.status(200).json(matches);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const match = await this.matches.getById(Number(id));
    res.status(200).json(match);
  }

  async saveNewMatch(req: Request, res: Response) {
    const newMatch = req.body;
    const match = await this.matches.saveNewMatch(newMatch);
    res.status(201).json(match);
  }

  async updateMatchStatus(req: Request, res: Response) {
    const { id } = req.params;
    await this.matches.updateMatchStatus(Number(id));
    res.status(200).json({ message: 'Finished' });
  }

  async updateMatchScore(req: Request, res: Response) {
    const { id } = req.params;
    const score = req.body;
    await this.matches.updateMatchScore(score, Number(id));
    res.status(200).json({ message: 'Score Updated' });
  }
}

export default MatchController;
