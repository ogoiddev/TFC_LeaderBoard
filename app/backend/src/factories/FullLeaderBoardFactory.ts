import FullLeaderBoardUseCase from '../useCases/LeaderBoard/FullLeaderBoardUseCase';
import MatchRepository from '../repositories/MatchRepository';
import LeaderBoardController from '../useCases/LeaderBoard/LeaderBoardController';
import Factory from './Factory';

export default class FullLeaderBoard extends Factory {
  constructor() {
    super();
    this._repository = MatchRepository;
    this._useCase = FullLeaderBoardUseCase;
    this._controller = LeaderBoardController;
  }
}
