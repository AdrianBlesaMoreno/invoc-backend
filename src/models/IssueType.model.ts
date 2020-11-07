import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Issue } from "./Issue.model";

@Index("name", ["name"], {})
@Entity("issue_type", { schema: "invoc" })
export class IssueType {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 25 })
  name: string;

  @Column("varchar", { name: "description", length: 400 })
  description: string;

  @OneToMany(() => Issue, (issue) => issue.idType2)
  issues: Issue[];
}
