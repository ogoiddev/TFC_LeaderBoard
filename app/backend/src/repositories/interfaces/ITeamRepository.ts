import { ITeam } from '../../entities/interfaces/ITeam';

export interface ITeamRepository {
  getAll(): Promise<ITeam[] | []>;
  getById(id: number): Promise<ITeam | null>
}
