import { EntityRepository, Repository } from 'typeorm';
import { Project } from '../models/Project.model';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {


}