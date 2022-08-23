import { ControllerTypes, RepositoryTypes, UseCaseTypes } from './@types';

interface IFactory {
  _repository: RepositoryTypes;
  _useCase: UseCaseTypes;
  _controller: ControllerTypes
  make(): ControllerTypes
}

export default class Factory implements IFactory {
  _repository: any;
  _useCase: any;
  _controller: any;

  public make(): ControllerTypes {
    const repository = new this._repository();
    const useCase = new this._useCase(repository);
    const controller = new this._controller(useCase);

    return controller;
  }
}
