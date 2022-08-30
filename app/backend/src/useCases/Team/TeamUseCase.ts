import { ITeamRepository } from '../../repositories/ITeamRepository';
import ErrorType from '../../utils/error/errorConstructor';
import TeamModel from '../../database/models/TeamModel';

export default class TeamUseCase {
  constructor(private teamList: ITeamRepository) { }

  async getAll(): Promise<TeamModel[] | []> {
    const teamList = await this.teamList.getAll();

    return teamList;
  }

  async getById(id: number): Promise<TeamModel> {
    const team = await this.teamList.getById(id);

    if (!team) throw new ErrorType(400, 'Team not found');

    return team;
  }
}
