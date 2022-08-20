import { ILoginUserRequestDTO } from '../LoginUserDTO';

export interface ILoginUserUseCase {
  query(requestBody: ILoginUserRequestDTO): Promise<string>;
}
