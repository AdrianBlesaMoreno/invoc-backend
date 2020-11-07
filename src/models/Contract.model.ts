import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company.model";

@Index("FK_contract_company", ["idCompany"], {})
@Entity("contract", { schema: "invoc" })
export class Contract {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "id_company", unsigned: true })
  idCompany: number;

  @Column("float", { name: "price", precision: 12 })
  price: number;

  @Column("bit", { name: "close", default: () => "'b'0''" })
  close: boolean;

  @ManyToOne(() => Company, (company) => company.contracts, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_company", referencedColumnName: "id" }])
  idCompany2: Company;
}
