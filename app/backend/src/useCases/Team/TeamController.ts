import { Request, Response } from 'express';
import { ITeamRepository } from '../../repositories/interfaces/ITeamRepository';
import { ITeamController } from './interfaces/ITeamController';

require('express-async-errors');

class TeamController implements ITeamController {
  constructor(private teamList: ITeamRepository) { }

  async getAll(_req: Request, res: Response) {
    const teamList = await this.teamList.getAll();
    res.status(200).json(teamList);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this.teamList.getById(Number(id));
    res.status(200).json(team);
  }
}

export default TeamController;
