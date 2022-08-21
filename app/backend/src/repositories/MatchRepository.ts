import TeamModel from '../database/models/TeamModel';
import Match from '../entities/Match';
import MatchModel from '../database/models/MatchModel';
import { IMatchRepository } from './interfaces/IMatchRepository';

export default class MatchRepository implements IMatchRepository {
  private model = MatchModel;
  private teamModel = TeamModel;

  async getAll(): Promise<Match[] | []> {
    const MatchList = await this.model.findAll({
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
    const match = await this.model.findOne({ where: { id } });
    return match as Match | null;
  }
}
