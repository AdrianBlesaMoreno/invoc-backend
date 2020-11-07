import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoice } from "./Invoice.model";

@Index("FK-invoice_product-invoice", ["idInvoice"], {})
@Entity("invoice_product", { schema: "invoc" })
export class InvoiceProduct {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "id_invoice", unsigned: true })
  idInvoice: number;

  @Column("varchar", { name: "name", length: 25 })
  name: string;

  @Column("float", { name: "price", precision: 12 })
  price: number;

  @Column("int", { name: "units", nullable: true })
  units: number | null;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceProducts, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_invoice", referencedColumnName: "id" }])
  idInvoice2: Invoice;
}
