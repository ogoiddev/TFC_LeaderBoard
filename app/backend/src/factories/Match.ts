import MatchRepository from '../repositories/MatchRepository';
import MatchController from '../useCases/Match/MatchController';
import MatchUseCase from '../useCases/Match/MatchUseCase';
import Factory from './Factory';

export default class Match extends Factory {
  constructor() {
    super();
    this._repository = MatchRepository;
    this._useCase = MatchUseCase;
    this._controller = MatchController;
  }
}
