import TeamModel from '../database/models/TeamModel';

export interface ITeamRepository {
  getAll(): Promise<TeamModel[] | []>;
  getById(id: number): Promise<TeamModel | null>
}
