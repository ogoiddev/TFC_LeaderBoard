import MatchRepository from '../../repositories/implementations/MatchRepository';
import MatchController from './MatchController';
import MatchUseCase from './MatchUseCase';

const mySqlRepository = new MatchRepository();

const matchUseCase = new MatchUseCase(mySqlRepository);

const matchController = new MatchController(matchUseCase);

export default { matchUseCase, matchController };
