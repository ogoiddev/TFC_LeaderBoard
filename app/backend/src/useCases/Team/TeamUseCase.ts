import { ITeamRepository } from '../../repositories/interfaces/ITeamRepository';
import Team from '../../entities/Team';
import ErrorType from '../../utils/error/errorConstructor';
import { ITeamUseCase } from './interfaces/ITeamUseCase';

class TeamUseCase implements ITeamUseCase {
  constructor(private teamList: ITeamRepository) { }

  async getAll(): Promise<Team[] | []> {
    const teamList = await this.teamList.getAll();
    return teamList;
  }

  async getById(id: number): Promise<Team> {
    const team = await this.teamList.getById(id);
    if (!team) throw new ErrorType(400, 'Team not found');
    return team;
  }
}

export default TeamUseCase;
