import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Salesorderheader } from "./Salesorderheader";
import { Product } from "./Product";
import { Specialofferproduct } from "./Specialofferproduct";

@Index("my_fk_46", ["salesOrderId"], {})
@Index("my_fk_47", ["productId"], {})
@Index("my_fk_48", ["specialOfferId"], {})
@Entity("salesorderdetail", { schema: "adventureworks" })
export class Salesorderdetail {
  @Column("int", { primary: true, name: "SalesOrderID" })
  salesOrderId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "SalesOrderDetailID" })
  salesOrderDetailId: number;

  @Column("varchar", {
    name: "CarrierTrackingNumber",
    nullable: true,
    length: 25,
  })
  carrierTrackingNumber: string | null;

  @Column("smallint", { name: "OrderQty" })
  orderQty: number;

  @Column("int", { name: "ProductID" })
  productId: number;

  @Column("int", { name: "SpecialOfferID" })
  specialOfferId: number;

  @Column("double", { name: "UnitPrice", precision: 22 })
  unitPrice: number;

  @Column("double", { name: "UnitPriceDiscount", precision: 22 })
  unitPriceDiscount: number;

  @Column("double", { name: "LineTotal", precision: 22 })
  lineTotal: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.salesorderdetails,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "SalesOrderID", referencedColumnName: "salesOrderId" }])
  salesOrder: Salesorderheader;

  @ManyToOne(() => Product, (product) => product.salesorderdetails, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;

  @ManyToOne(
    () => Specialofferproduct,
    (specialofferproduct) => specialofferproduct.salesorderdetails,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "SpecialOfferID", referencedColumnName: "specialOfferId" },
  ])
  specialOffer: Specialofferproduct;
}
