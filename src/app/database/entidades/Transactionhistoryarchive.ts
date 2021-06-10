import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Index("my_fk_74", ["productId"], {})
@Entity("transactionhistoryarchive", { schema: "adventureworks" })
export class Transactionhistoryarchive {
  @Column("int", { primary: true, name: "TransactionID" })
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

  @ManyToOne(() => Product, (product) => product.transactionhistoryarchives, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;
}
