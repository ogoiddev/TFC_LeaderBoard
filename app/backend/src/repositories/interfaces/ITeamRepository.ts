import Team from '../../entities/Team';

export interface ITeamRepository {
  getAll(): Promise<Team[] | []>;
  getById(id: number): Promise<Team | null>
}
