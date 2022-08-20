import Team from '../../../entities/Team';

export interface ITeamUseCase {
  queryAll(): Promise<Team[]>
  queryById(id: number): Promise<Team>
}
