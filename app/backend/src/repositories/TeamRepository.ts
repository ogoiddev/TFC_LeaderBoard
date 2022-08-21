import Team from '../entities/Team';
import TeamModel from '../database/models/TeamModel';
import { ITeamRepository } from './interfaces/ITeamRepository';

export default class TeamRepository implements ITeamRepository {
  private model = TeamModel;

  async getAll(): Promise<Team[] | []> {
    const matches = await this.model.findAll();
    return matches as Team[] | [];
  }

  async getById(id: number): Promise<Team | null> {
    const match = await this.model.findOne({ where: { id } });
    return match as Team | null;
  }
}
