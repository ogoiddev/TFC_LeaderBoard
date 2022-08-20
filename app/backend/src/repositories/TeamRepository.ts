import TeamModel from '../database/models/TeamModel';
import { ITeamRepository } from './interfaces/ITeamRepository';

export default class TeamRepository implements ITeamRepository {
  private model = TeamModel;
  async getAll() {
    const teamList = await this.model.findAll();
    return teamList;
  }
}
