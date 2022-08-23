import { ILeaderBoard } from './interfaces/ILeaderBoard';

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

  constructor(props: LeaderBoard) {
    Object.assign(this, props);

    this.totalPoints = this.totalVictories * 3;
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100);
    this.efficiency.toFixed(2);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }
}
