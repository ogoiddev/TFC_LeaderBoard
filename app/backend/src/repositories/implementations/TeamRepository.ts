import TeamModel from '../../database/models/TeamModel';
import { ITeamRepository } from '../ITeamRepository';

export default class TeamRepository implements ITeamRepository {
  private model = TeamModel;

  async getAll(): Promise<TeamModel[] | []> {
    const teams = await this.model.findAll({ raw: true });

    return teams;
  }

  async getById(id: number): Promise<TeamModel | null> {
    const team = await this.model.findOne({ where: { id }, raw: true });

    return team;
  }
}
