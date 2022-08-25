import FullLeaderBoardUseCase from '../useCases/LeaderBoard/FullLeaderBoardUseCase';
import MatchRepository from '../repositories/MatchRepository';
import HomeLeaderBoardController from '../useCases/LeaderBoard/HomeLeaderBoardController';
import Factory from './Factory';

export default class FullLeaderBoard extends Factory {
  constructor() {
    super();
    this._repository = MatchRepository;
    this._useCase = FullLeaderBoardUseCase;
    this._controller = HomeLeaderBoardController;
  }
}
