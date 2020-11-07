import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { InvoiceIssue } from "./InvoiceIssue.model";
import { InvoiceProduct } from "./InvoiceProduct.model";

@Entity("invoice", { schema: "invoc" })
export class Invoice {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "number", nullable: true, unsigned: true })
  number: number | null;

  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @Column("date", { name: "limit_date", nullable: true })
  limitDate: string | null;

  @OneToMany(() => InvoiceIssue, (invoiceIssue) => invoiceIssue.idInvoice2)
  invoiceIssues: InvoiceIssue[];

  @OneToMany(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.idInvoice2
  )
  invoiceProducts: InvoiceProduct[];
}
