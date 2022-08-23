export interface IMatchToSaveDTO extends IMatchUpdateScoreDTO {
  homeTeam: number,
  awayTeam: number,

}

export interface IMatchUpdateScoreDTO {
  homeTeamGoals: number,
  awayTeamGoals: number,
}
