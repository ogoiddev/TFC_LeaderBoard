import { Request, Response } from 'express';

export interface IMatchController {
  getAll(req: Request, res: Response): Promise<void>;
  getById(req: Request, res: Response): Promise<void>;

  saveNewMatch(req: Request, res: Response): Promise<void>;
  updateMatchStatus(req: Request, res: Response): Promise<void>;
  updateMatchScore(req: Request, res: Response): Promise<void>;
}
