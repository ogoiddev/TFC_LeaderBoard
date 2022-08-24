import { ITeam } from '../../entities/interfaces/ITeam';
import { ITeamRepository } from '../../repositories/interfaces/ITeamRepository';
import ErrorType from '../../utils/error/errorConstructor';
import { ITeamUseCase } from './interfaces/ITeamUseCase';

class TeamUseCase implements ITeamUseCase {
  constructor(private teamList: ITeamRepository) { }

  async getAll(): Promise<ITeam[] | []> {
    const teamList = await this.teamList.getAll();
    return teamList;
  }

  async getById(id: number): Promise<ITeam> {
    const team = await this.teamList.getById(id);
    if (!team) throw new ErrorType(400, 'Team not found');
    return team;
  }
}

export default TeamUseCase;
