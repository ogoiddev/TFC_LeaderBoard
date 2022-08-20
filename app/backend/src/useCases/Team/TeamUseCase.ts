import { ITeamRepository } from '../../repositories/interfaces/ITeamRepository';
import Team from '../../entities/Team';

class TeamUseCase {
  constructor(private teamList: ITeamRepository) { }

  async query(): Promise<Team[]> {
    const teamList = await this.teamList.getAll();
    return teamList;
  }
}

export default TeamUseCase;
