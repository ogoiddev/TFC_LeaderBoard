import { Request, Response } from 'express';
import MatchRepository from '../repositories/MatchRepository';
import MatchController from '../useCases/Match/MatchController';
import MatchUseCase from '../useCases/Match/MatchUseCase';

class MatchListFactory {
  static list(req: Request, res: Response) {
    const listRepository = new MatchRepository();
    const listUseCase = new MatchUseCase(listRepository);
    const listController = new MatchController(listUseCase);

    return listController.getMatches(req, res);
  }
}

export default MatchListFactory;
