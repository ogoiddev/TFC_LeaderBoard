import MatchModel from '../database/models/MatchModel';
import TeamModel from '../database/models/TeamModel';
import { IMatch } from '../entities/interfaces/IMatch';
import Match from '../entities/Match';
import { IMatchToSaveDTO, IMatchUpdateScoreDTO } from '../useCases/Match/MatchUseCaseDTO';
import { IMatchRepository } from './interfaces/IMatchRepository';

export default class MatchRepository implements IMatchRepository {
  private matchModel = MatchModel;
  private teamModel = TeamModel;

  async getAllFinished(): Promise<IMatch[] | []> {
    const MatchList = await this.matchModel.findAll({ where: { inProgress: false } });
    return MatchList as Match[] | [];
  }

  async getAll(): Promise<IMatch[] | []> {
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

  async getById(id: number): Promise<IMatch | null> {
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
