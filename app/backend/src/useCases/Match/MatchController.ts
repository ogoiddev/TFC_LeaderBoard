import { Request, Response } from 'express';
import MatchUseCase from './MatchUseCase';

export default class MatchController {
  constructor(private matches: MatchUseCase) { }

  public getAllWithTeamName = async (_req: Request, res: Response) => {
    const matches = await this.matches.getAllWithTeamName();

    res.status(200).json(matches);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const match = await this.matches.getById(Number(id));

    res.status(200).json(match);
  };

  public saveNewMatch = async (req: Request, res: Response) => {
    const newMatch = req.body;

    const match = await this.matches.saveNewMatch(newMatch);

    res.status(201).json(match);
  };

  public updateMatchStatus = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.matches.updateMatchStatus(Number(id));

    res.status(200).json({ message: 'Finished' });
  };

  public updateMatchScore = async (req: Request, res: Response) => {
    const { id } = req.params;
    const score = req.body;

    await this.matches.updateMatchScore(score, Number(id));

    res.status(200).json({ message: 'Score Updated' });
  };
}
