import MatchRepository from '../repositories/MatchRepository';
import HomeLeaderBoardController from '../useCases/LeaderBoard/HomeLeaderBoardController';
import HomeLeaderBoardUseCase from '../useCases/LeaderBoard/HomeLeaderBoardUseCase';
import Factory from './Factory';

export default class LeaderBoard extends Factory {
  constructor() {
    super();
    this._repository = MatchRepository;
    this._useCase = HomeLeaderBoardUseCase;
    this._controller = HomeLeaderBoardController;
  }
}
