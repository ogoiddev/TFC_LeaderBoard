import MatchRepository from '../repositories/MatchRepository';
import AwayLeaderBoardUseCase from '../useCases/LeaderBoard/AwayLeaderBoardUseCase';
import HomeLeaderBoardController from '../useCases/LeaderBoard/HomeLeaderBoardController';
import Factory from './Factory';

export default class AwayLeaderBoard extends Factory {
  constructor() {
    super();
    this._repository = MatchRepository;
    this._useCase = AwayLeaderBoardUseCase;
    this._controller = HomeLeaderBoardController;
  }
}