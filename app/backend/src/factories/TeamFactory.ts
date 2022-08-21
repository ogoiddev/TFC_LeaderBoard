import { Request, Response } from 'express';
import TeamRepository from '../repositories/TeamRepository';
import TeamController from '../useCases/Team/TeamController';
import TeamUseCase from '../useCases/Team/TeamUseCase';

class TeamFactory {
  static team(req: Request, res: Response) {
    const listRepository = new TeamRepository();
    const listUseCase = new TeamUseCase(listRepository);
    const listController = new TeamController(listUseCase);

    return listController.getTeam(req, res);
  }
}

export default TeamFactory;
