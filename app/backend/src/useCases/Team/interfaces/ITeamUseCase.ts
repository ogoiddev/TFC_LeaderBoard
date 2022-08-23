import Team from '../../../entities/Team';

export interface ITeamUseCase {
  getAll(): Promise<Team[] | []>;
  getById(id: number): Promise<Team | null>
}
