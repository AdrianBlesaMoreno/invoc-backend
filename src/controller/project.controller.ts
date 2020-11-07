import { JsonController } from 'routing-controllers';
import { GenericController } from './generic.controller';
import { getCustomRepository } from 'typeorm';
import { Project } from '../models/Project.model';
import { ProjectRepository } from '../repository/project.repository';

@JsonController('/projects')
export class ProjectController extends GenericController<Project, ProjectRepository>{

    constructor(){
        super();
        this.repository = getCustomRepository(ProjectRepository);
    }

    getAll(){
        return this.repository.find({
            relations: ['client']
        })
    }

    getOne(id: number){
        return this.repository.findOne(id, {
            relations: ['client']
        })
    }

}