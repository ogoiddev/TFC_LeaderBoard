import { IMatchToSaveDTO, IMatchUpdateScoreDTO } from '../useCases/Match/MatchUseCaseDTO';
import MatchModel from '../database/models/MatchModel';
import TeamModel from '../database/models/TeamModel';
import Match from '../entities/Match';
import { IMatchRepository } from './interfaces/IMatchRepository';

export default class MatchRepository implements IMatchRepository {
  private matchModel = MatchModel;
  private teamModel = TeamModel;

  async getAll(): Promise<Match[] | []> {
    const MatchList = await this.matchModel.findAll({
      include: [{
        model: this.teamModel,
        as: 'teamHome',
        attributes: ['teamName'],
      },
      {
        model: this.teamModel,
        as: 'teamAway',
        attributes: ['teamName'],
      }],
    });
    return MatchList as Match[] | [];
  }

  async getById(id: number): Promise<Match | null> {
    const match = await this.matchModel.findOne({ where: { id } });
    return match as Match | null;
  }

  async saveNewMatch(match: IMatchToSaveDTO): Promise<MatchModel> {
    const matchSaved = await this.matchModel.create({ ...match, inProgress: true });

    return matchSaved;
  }

  async updateMatchStatus(id: number): Promise<void> {
    await this.matchModel.update({ inProgress: false }, { where: { id } });
  }

  async updateMatchScore(score: IMatchUpdateScoreDTO, id: number): Promise<void> {
    await this.matchModel.update(score, { where: { id } });
  }
}
