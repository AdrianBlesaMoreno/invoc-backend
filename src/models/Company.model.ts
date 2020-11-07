import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contract } from "./Contract.model";

@Index("name", ["name"], {})
@Index("nif", ["nif"], {})
@Entity("company", { schema: "invoc" })
export class Company {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 250 })
  name: string;

  @Column("varchar", { name: "nif", length: 50 })
  nif: string;

  @Column("varchar", { name: "street", length: 250 })
  street: string;

  @Column("varchar", { name: "town", length: 100 })
  town: string;

  @Column("varchar", { name: "city", length: 100 })
  city: string;

  @Column("varchar", { name: "country", length: 100 })
  country: string;

  @Column("varchar", { name: "postcode", length: 20 })
  postcode: string;

  @OneToMany(() => Contract, (contract) => contract.idCompany2)
  contracts: Contract[];
}
