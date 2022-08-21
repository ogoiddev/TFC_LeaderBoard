import { ITeam } from './interfaces/ITeam';

class Team implements ITeam {
  id: number;
  teamName: string;

  constructor(props: Team) {
    Object.assign(this, props);
  }
}

export default Team;
