import { ILeaderBoard } from './interfaces/ILeaderBoard';
import { IPropsGames } from './interfaces/IPropGames';

export default class LeaderBoard implements ILeaderBoard {
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

  addGame(props: IPropsGames) {
    this.totalVictories += props.win;
    this.totalDraws += props.draws;
    this.totalLosses += props.lose;
    this.goalsFavor += props.goals;
    this.goalsOwn += props.goalsOwn;
  }

  end() {
    this.totalPoints = this.totalVictories * 3;
    this.totalGames += 1;
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100);
    this.efficiency.toFixed(2);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }
}
