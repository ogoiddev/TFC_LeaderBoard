import { IMatch } from './interfaces/IMatch';

class Match implements IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;

  constructor(props: Match) {
    Object.assign(this, props);
  }
}

export default Match;
