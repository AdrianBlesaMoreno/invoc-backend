import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Issue } from "./Issue.model";

@Index("FK-work_time-issue", ["idIssue"], {})
@Entity("work_time", { schema: "invoc" })
export class WorkTime {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "id_issue", unsigned: true })
  idIssue: number;

  @Column("text", { name: "description" })
  description: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", { name: "last_update", nullable: true })
  lastUpdate: Date | null;

  @Column("float", { name: "time", precision: 12, default: () => "'0'" })
  time: number;

  @ManyToOne(() => Issue, (issue) => issue.workTimes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_issue", referencedColumnName: "id" }])
  idIssue2: Issue;
}
