import Match from '../../../entities/Match';

export interface IMatchUseCase {
  queryAll(): Promise<Match[]>
  queryById(id: number): Promise<Match>
}
