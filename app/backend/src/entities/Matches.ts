class Matches {
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
