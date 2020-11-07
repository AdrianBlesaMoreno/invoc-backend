import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Issue } from "./Issue.model";
import { Client } from "./Client.model";

@Index("codigo", ["codigo"], {})
@Index("name", ["name"], {})
@Index("FK-project-client", ["idClient"], {})
@Entity("project", { schema: "invoc" })
export class Project {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "id_client", unsigned: true })
  idClient: number;

  @Column("int", { name: "codigo" })
  codigo: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("varchar", { name: "descripction", nullable: true, length: 1000 })
  descripction: string | null;

  @OneToMany(() => Issue, (issue) => issue.idProject2)
  issues: Issue[];

  @ManyToOne(() => Client, (client) => client.projects, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_client", referencedColumnName: "id" }])
  client: Client;
}
