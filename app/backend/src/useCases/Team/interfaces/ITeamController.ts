import { Request, Response } from 'express';

export interface ITeamController {
  getAll(req: Request, res: Response): Promise<void>
  getById(req: Request, res: Response): Promise<void>
}
