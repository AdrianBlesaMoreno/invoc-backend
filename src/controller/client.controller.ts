import { JsonController } from 'routing-controllers';
import { Client } from '../models/Client.model';
import { GenericController } from './generic.controller';
import { ClientRepository } from '../repository/client.repository';
import { getCustomRepository } from 'typeorm';

@JsonController('/clients')
export class ClientController extends GenericController<Client, ClientRepository>{

    constructor(){
        super();
        this.repository = getCustomRepository(ClientRepository);
    }

    getAll(){
        return this.repository.find({
            relations: ['projects']
        })
    }

    getOne(id: number){
        return this.repository.findOne(id, {
            relations: ['projects']
        })
    }

}