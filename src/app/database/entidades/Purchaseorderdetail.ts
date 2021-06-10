import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Purchaseorderheader } from "./Purchaseorderheader";
import { Product } from "./Product";

@Index("my_fk_41", ["purchaseOrderId"], {})
@Index("my_fk_42", ["productId"], {})
@Entity("purchaseorderdetail", { schema: "adventureworks" })
export class Purchaseorderdetail {
  @Column("int", { primary: true, name: "PurchaseOrderID" })
  purchaseOrderId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "PurchaseOrderDetailID" })
  purchaseOrderDetailId: number;

  @Column("datetime", { name: "DueDate" })
  dueDate: Date;

  @Column("smallint", { name: "OrderQty" })
  orderQty: number;

  @Column("int", { name: "ProductID" })
  productId: number;

  @Column("double", { name: "UnitPrice", precision: 22 })
  unitPrice: number;

  @Column("double", { name: "LineTotal", precision: 22 })
  lineTotal: number;

  @Column("decimal", { name: "ReceivedQty", precision: 8, scale: 2 })
  receivedQty: string;

  @Column("decimal", { name: "RejectedQty", precision: 8, scale: 2 })
  rejectedQty: string;

  @Column("decimal", { name: "StockedQty", precision: 9, scale: 2 })
  stockedQty: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Purchaseorderheader,
    (purchaseorderheader) => purchaseorderheader.purchaseorderdetails,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "PurchaseOrderID", referencedColumnName: "purchaseOrderId" },
  ])
  purchaseOrder: Purchaseorderheader;

  @ManyToOne(() => Product, (product) => product.purchaseorderdetails, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;
}
