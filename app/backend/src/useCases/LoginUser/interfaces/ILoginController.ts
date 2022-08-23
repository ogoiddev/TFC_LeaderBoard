import { Request, Response } from 'express';

export interface ILoginController {
  checkToToken(req: Request, res: Response): Promise<void>
}
