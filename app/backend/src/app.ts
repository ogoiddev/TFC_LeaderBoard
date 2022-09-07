import 'express-async-errors';

import * as cors from 'cors';
import * as express from 'express';

import helmet from 'helmet';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerFile from './swagger_output.json';

import Errors from './middleware/errorMiddleware';
import Routes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(cors());

    this.app.use(express.json());
    this.app.use(accessControl);

    this.app.use(Routes);

    this.app.use(Errors.middleware);

    this.app.use(helmet());

    this.app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
