import Team from '../../../entities/Team';

export interface ITeamUseCase {
  query(): Promise<Team[]>
}
