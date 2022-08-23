import { ILoginUseCase } from '../useCases/LoginUser/interfaces/ILoginUseCase';
import { IMatchUseCase } from '../useCases/Match/interfaces/IMatchUseCase';
import { ITeamUseCase } from '../useCases/Team/interfaces/ITeamUseCase';
import { ILoginRepository } from '../repositories/interfaces/ILoginRepository';
import { IMatchRepository } from '../repositories/interfaces/IMatchRepository';
import { ITeamRepository } from '../repositories/interfaces/ITeamRepository';
import { ILoginController } from '../useCases/LoginUser/interfaces/ILoginController';
import { IMatchController } from '../useCases/Match/interfaces/IMatchController';
import { ITeamController } from '../useCases/Team/interfaces/ITeamController';

export type ControllerTypes =
  ILoginController | ITeamController | IMatchController;

export type RepositoryTypes =
  ILoginRepository | ITeamRepository | IMatchRepository;

export type UseCaseTypes =
ILoginUseCase | ITeamUseCase | IMatchUseCase;
