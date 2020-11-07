import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import { Client } from '../models/Client.model';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {


}