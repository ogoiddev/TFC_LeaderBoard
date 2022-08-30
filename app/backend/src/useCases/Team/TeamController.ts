import { Request, Response } from 'express';
import TeamUseCase from './TeamUseCase';

export default class TeamController {
  constructor(private teamList: TeamUseCase) { }

  public getAll = async (_req: Request, res: Response) => {
    const teamList = await this.teamList.getAll();

    res.status(200).json(teamList);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const team = await this.teamList.getById(Number(id));

    res.status(200).json(team);
  };
}
