import { Request, Response } from 'express';
import { ITeamUseCase } from './interfaces/ITeamUseCase';

require('express-async-errors');

class TeamController {
  constructor(private teamList: ITeamUseCase) { }

  async getTeamList(_req: Request, res: Response) {
    const teamList = await this.teamList.queryAll();
    res.status(200).json(teamList);
  }

  async getTeam(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this.teamList.queryById(Number(id));
    res.status(200).json(team);
  }
}

export default TeamController;
