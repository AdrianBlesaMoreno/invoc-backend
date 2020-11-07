import express, { Application } from 'express';
import "reflect-metadata";
import { createExpressServer, useExpressServer } from 'routing-controllers';
import { connect } from "./db/db";
import { ClientController } from './controller/client.controller';
import { ProjectController } from './controller/project.controller';

class App {
    public app: Application;
    public port: number;

    constructor(){
        this.port = 5000;
        connect();
        this.app = createExpressServer({
            controllers: [
                ClientController,
                ProjectController
            ]
        });
    }

    private middlewares(middleWares: any[]){
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
}
export default App;
