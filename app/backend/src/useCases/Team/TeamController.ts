import { Request, Response } from 'express';
import { ITeamUseCase } from './interfaces/ITeamUseCase';

class TeamController {
  constructor(private getTeamList: ITeamUseCase) { }

  async TeamList(_req: Request, res: Response) {
    const teamList = await this.getTeamList.query();
    res.status(200).json(teamList);
  }
}

export default TeamController;
