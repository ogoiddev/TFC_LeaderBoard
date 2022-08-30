import TeamRepository from '../../repositories/implementations/TeamRepository';
import TeamController from './TeamController';
import TeamUseCase from './TeamUseCase';

const mySqlRepository = new TeamRepository();

const teamUseCase = new TeamUseCase(mySqlRepository);

const teamController = new TeamController(teamUseCase);

export default { teamUseCase, teamController };
