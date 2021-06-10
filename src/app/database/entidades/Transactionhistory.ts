import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";

@Index("my_fk_73", ["productId"], {})
@Entity("transactionhistory", { schema: "adventureworks" })
export class Transactionhistory {
  @PrimaryGeneratedColumn({ type: "int", name: "TransactionID" })
  transactionId: number;

  @Column("int", { name: "ProductID" })
  productId: number;

  @Column("int", { name: "ReferenceOrderID" })
  referenceOrderId: number;

  @Column("int", { name: "ReferenceOrderLineID", default: () => "'0'" })
  referenceOrderLineId: number;

  @Column("timestamp", {
    name: "TransactionDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  transactionDate: Date;

  @Column("varchar", { name: "TransactionType", length: 1 })
  transactionType: string;

  @Column("int", { name: "Quantity" })
  quantity: number;

  @Column("double", { name: "ActualCost", precision: 22 })
  actualCost: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.transactionhistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;
}
