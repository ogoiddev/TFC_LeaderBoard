import Team from '../../entities/Team';

export interface ITeamRepository {
  getAll(): Promise<Team[] | []>;
}
