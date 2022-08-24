import { IHomeLeaderBoardUseCase }
  from '../useCases/LeaderBoard/interfaces/IHomeLeaderBoardUseCase';
import { ILoginRepository } from '../repositories/interfaces/ILoginRepository';
import { IMatchRepository } from '../repositories/interfaces/IMatchRepository';
import { ITeamRepository } from '../repositories/interfaces/ITeamRepository';
import { IHomeLeaderBoardController }
  from '../useCases/LeaderBoard/interfaces/IHomeLeaderBoardController';
import { ILoginController } from '../useCases/LoginUser/interfaces/ILoginController';
import { ILoginUseCase } from '../useCases/LoginUser/interfaces/ILoginUseCase';
import { IMatchController } from '../useCases/Match/interfaces/IMatchController';
import { IMatchUseCase } from '../useCases/Match/interfaces/IMatchUseCase';
import { ITeamController } from '../useCases/Team/interfaces/ITeamController';
import { ITeamUseCase } from '../useCases/Team/interfaces/ITeamUseCase';

export type RepositoryTypes =
ILoginRepository | ITeamRepository | IMatchRepository;

export type UseCaseTypes =
ILoginUseCase | ITeamUseCase | IMatchUseCase | IHomeLeaderBoardUseCase;

export type ControllerTypes =
  ILoginController | ITeamController | IMatchController | IHomeLeaderBoardController;
