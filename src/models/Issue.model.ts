import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceIssue } from "./InvoiceIssue.model";
import { IssueState } from "./IssueState.model";
import { IssueType } from "./IssueType.model";
import { Project } from "./Project.model";
import { WorkTime } from "./WorkTime.model";

@Index("code", ["code"], {})
@Index("FK-issue-project", ["idProject"], {})
@Index("FK-issue-issue", ["idParent"], {})
@Index("FK-issue-issue_state", ["idState"], {})
@Index("FK-issue-issue_type", ["idType"], {})
@Entity("issue", { schema: "invoc" })
export class Issue {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "id_project", unsigned: true })
  idProject: number;

  @Column("int", { name: "id_parent", nullable: true, unsigned: true })
  idParent: number | null;

  @Column("int", { name: "id_type", unsigned: true })
  idType: number;

  @Column("int", { name: "id_state", unsigned: true })
  idState: number;

  @Column("varchar", { name: "code", length: 50, default: () => "'0'" })
  code: string;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("float", { name: "estimated_hours", unsigned: true, precision: 12 })
  estimatedHours: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", { name: "last_update", nullable: true })
  lastUpdate: Date | null;

  @Column("date", { name: "release_date", nullable: true })
  releaseDate: string | null;

  @OneToMany(() => InvoiceIssue, (invoiceIssue) => invoiceIssue.idIssue2)
  invoiceIssues: InvoiceIssue[];

  @ManyToOne(() => Issue, (issue) => issue.issues, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_parent", referencedColumnName: "id" }])
  idParent2: Issue;

  @OneToMany(() => Issue, (issue) => issue.idParent2)
  issues: Issue[];

  @ManyToOne(() => IssueState, (issueState) => issueState.issues, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_state", referencedColumnName: "id" }])
  idState2: IssueState;

  @ManyToOne(() => IssueType, (issueType) => issueType.issues, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_type", referencedColumnName: "id" }])
  idType2: IssueType;

  @ManyToOne(() => Project, (project) => project.issues, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_project", referencedColumnName: "id" }])
  idProject2: Project;

  @OneToMany(() => WorkTime, (workTime) => workTime.idIssue2)
  workTimes: WorkTime[];
}
