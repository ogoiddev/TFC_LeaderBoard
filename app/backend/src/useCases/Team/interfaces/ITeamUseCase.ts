import { ITeam } from '../../../entities/interfaces/ITeam';

export interface ITeamUseCase {
  getAll(): Promise<ITeam[] | []>;
  getById(id: number): Promise<ITeam | null>
}
