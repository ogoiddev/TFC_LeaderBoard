import { IMatch } from './IMatch';

export interface IMatchIncludeName extends IMatch{

  teamHome: {
    teamName: string
  },
  teamAway: {
    teamName: string
  }
}
