import App from './app'
import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';

import { ClientController } from './controller/client.controller';

const app = new App()

app.listen()