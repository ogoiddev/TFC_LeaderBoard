import { ITeam } from '../entities/interfaces/ITeam';
import TeamModel from '../database/models/TeamModel';
import { ITeamRepository } from './interfaces/ITeamRepository';

export default class TeamRepository implements ITeamRepository {
  private model = TeamModel;

  async getAll(): Promise<ITeam[] | []> {
    const matches = await this.model.findAll() as ITeam[] | [];
    return matches;
  }

  async getById(id: number): Promise<ITeam | null> {
    const match = await this.model.findOne({ where: { id } }) as ITeam | null;
    return match;
  }
}
