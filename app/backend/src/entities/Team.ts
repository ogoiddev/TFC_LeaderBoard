class Team {
  public id: number;
  public teamName: string;

  constructor(props: Team) {
    Object.assign(this, props);
  }
}

export default Team;
