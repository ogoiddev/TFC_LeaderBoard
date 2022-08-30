import { ITableTeamResults } from './interfaces/ITableTeamResults';
import { ITablePropMatch } from './interfaces/ITablePropToCalcMatch';

export default class TableTeamInfo implements ITableTeamResults {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;

  constructor(teamName: string) {
    this.name = teamName;

    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = 0;
  }

  addNewMatch(props: ITablePropMatch) {
    this.totalGames += 1;
    this.totalVictories += props.win;
    this.totalDraws += props.draws;
    this.totalPoints = this.totalVictories * 3 + this.totalDraws;
    this.totalLosses += props.lose;
    this.goalsFavor += props.goals;
    this.goalsOwn += props.goalsOwn;
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = (this.totalPoints / (this.totalGames * 3)) * 100;
    this.efficiency = Math.round(this.efficiency * 100) / 100;
  }
}
