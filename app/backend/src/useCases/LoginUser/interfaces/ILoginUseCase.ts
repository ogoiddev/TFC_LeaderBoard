export interface ILoginUseCase {
  getByEmail(email: string): Promise<string>;
}
