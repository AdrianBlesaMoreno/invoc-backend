import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoice } from "./Invoice.model";
import { Issue } from "./Issue.model";

@Index("FK-invoice_issue-invoice", ["idInvoice"], {})
@Index("FK-invoice_issue-issue", ["idIssue"], {})
@Entity("invoice_issue", { schema: "invoc" })
export class InvoiceIssue {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "id_invoice", unsigned: true })
  idInvoice: number;

  @Column("int", { name: "id_issue", unsigned: true })
  idIssue: number;

  @Column("float", { name: "price", unsigned: true, precision: 12 })
  price: number;

  @Column("int", { name: "unit", nullable: true, unsigned: true })
  unit: number | null;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceIssues, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_invoice", referencedColumnName: "id" }])
  idInvoice2: Invoice;

  @ManyToOne(() => Issue, (issue) => issue.invoiceIssues, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_issue", referencedColumnName: "id" }])
  idIssue2: Issue;
}
