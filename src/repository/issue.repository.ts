import { EntityRepository, Repository } from 'typeorm';
import { Issue } from '../models/Issue.model';

@EntityRepository(Issue)
export class IssueRepository extends Repository<Issue> {


}