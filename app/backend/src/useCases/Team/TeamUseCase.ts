import { ITeamRepository } from '../../repositories/interfaces/ITeamRepository';
import Team from '../../entities/Team';
import ErrorType from '../../utils/error/errorConstructor';

class TeamUseCase {
  constructor(private teamList: ITeamRepository) { }

  async queryAll(): Promise<Team[] | []> {
    const teamList = await this.teamList.getAll();
    return teamList;
  }

  async queryById(id: number): Promise<Team> {
    const team = await this.teamList.getById(id);
    if (!team) throw new ErrorType(400, 'Team not found');
    return team;
  }
}

export default TeamUseCase;
