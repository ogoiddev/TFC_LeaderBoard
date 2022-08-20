import { Request, Response } from 'express';
import TeamRepository from '../repositories/TeamRepository';
import TeamController from '../useCases/Team/TeamController';
import TeamUseCase from '../useCases/Team/TeamUseCase';

class TamListFactory {
  static list(req: Request, res: Response) {
    const listRepository = new TeamRepository();
    const listUseCase = new TeamUseCase(listRepository);
    const listController = new TeamController(listUseCase);

    return listController.TeamList(req, res);
  }
}

export default TamListFactory;
