import { ITableTeamResults } from '../../entities/interfaces/ITableTeamResults';

export default class SortBoardUseCase {
  static sort(list: ITableTeamResults[]) {
    return list.sort((b, a) => b.goalsOwn - a.goalsOwn)
      .sort((b, a) => a.goalsFavor - b.goalsFavor)
      .sort((b, a) => a.goalsBalance - b.goalsBalance)
      .sort((b, a) => a.totalVictories - b.totalVictories)
      .sort((b, a) => a.totalPoints - b.totalPoints);
  }
}
