import Team from '../entities/Team';
import TeamModel from '../database/models/TeamModel';
import { ITeamRepository } from './interfaces/ITeamRepository';

export default class TeamRepository implements ITeamRepository {
  private model = TeamModel;
  async getAll(): Promise<Team[] | []> {
    const teamList = await this.model.findAll();
    return teamList;
  }

  async getById(id: number): Promise<Team | null> {
    const team = await this.model.findOne({ where: { id } });
    return team;
  }
}
