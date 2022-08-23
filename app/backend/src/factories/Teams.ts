import TeamRepository from '../repositories/TeamRepository';
import TeamController from '../useCases/Team/TeamController';
import TeamUseCase from '../useCases/Team/TeamUseCase';
import Factory from './Factory';

export default class Team extends Factory {
  constructor() {
    super();
    this._repository = TeamRepository;
    this._useCase = TeamUseCase;
    this._controller = TeamController;
  }
}
