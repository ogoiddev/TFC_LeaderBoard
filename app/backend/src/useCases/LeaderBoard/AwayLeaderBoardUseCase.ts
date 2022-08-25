import { ITableTeamResults } from '../../entities/interfaces/ITableTeamResults';
import { IMatch } from '../../entities/interfaces/IMatch';
import { ITeam } from '../../entities/interfaces/ITeam';
import TableTeamResults from '../../entities/TableTeamResults';
import { IMatchRepository } from '../../repositories/interfaces/IMatchRepository';
import TeamRepository from '../../repositories/TeamRepository';
import SortBoardByRules from './SortBoardByRulesUseCase';

export default class AwayLeaderBoardUseCase {
  constructor(
    private matches: IMatchRepository,
    private teams = new TeamRepository(),
  ) { }

  static calcValues(allTeams: ITeam[], allMatches: IMatch[]) {
    return allTeams.map((each) => {
      const team = new TableTeamResults(each.teamName);

      allMatches.forEach((match) => {
        if (each.id === match.awayTeam) {
          team.addNewMatch({
            win: match.awayTeamGoals > match.homeTeamGoals ? 1 : 0,
            draws: match.awayTeamGoals === match.homeTeamGoals ? 1 : 0,
            lose: match.awayTeamGoals < match.homeTeamGoals ? 1 : 0,
            goals: match.awayTeamGoals,
            goalsOwn: match.homeTeamGoals,
          });
        }
      });

      return team;
    });
  }

  async fillLeaderBoard(): Promise<ITableTeamResults[]> {
    const allMatches = await this.matches.getAllFinished();
    const allTeams = await this.teams.getAll();
    const results: ITableTeamResults[] = AwayLeaderBoardUseCase.calcValues(allTeams, allMatches);

    const leaderBoardSorted = SortBoardByRules.sort(results);

    return leaderBoardSorted;
  }
}

// regas de desempate => 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.
