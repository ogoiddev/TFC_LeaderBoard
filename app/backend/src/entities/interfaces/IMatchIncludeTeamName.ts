import { IMatch } from './IMatch';

export interface IMatchIncludeTeamName extends IMatch{

  teamHome: {
    teamName: string
  },
  teamAway: {
    teamName: string
  }
}
