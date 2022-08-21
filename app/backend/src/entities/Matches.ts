import { IMatches } from './interfaces/IMatches';

class Matches implements IMatches {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;

  constructor(props: Matches) {
    Object.assign(this, props);
  }
}

export default Matches;
