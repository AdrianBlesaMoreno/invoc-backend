import { JsonController } from 'routing-controllers';
import { GenericController } from './generic.controller';
import { getCustomRepository } from 'typeorm';
import { Issue } from '../models/Issue.model';
import { IssueRepository } from '../repository/Issue.repository';

@JsonController('/Issues')
export class IssueController extends GenericController<Issue, IssueRepository>{

    constructor(){
        super();
        this.repository = getCustomRepository(IssueRepository);
    }

    getAll(){
        return this.repository.find({
            relations: ['project']
        })
    }

    getOne(id: number){
        return this.repository.findOne(id, {
            relations: ['project']
        })
    }

}