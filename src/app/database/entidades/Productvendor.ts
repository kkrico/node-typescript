import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";
import { Vendor } from "./Vendor";

@Index("my_fk_40", ["vendorId"], {})
@Entity("productvendor", { schema: "adventureworks" })
export class Productvendor {
  @Column("int", { primary: true, name: "ProductID" })
  productId: number;

  @Column("int", { primary: true, name: "VendorID" })
  vendorId: number;

  @Column("int", { name: "AverageLeadTime" })
  averageLeadTime: number;

  @Column("double", { name: "StandardPrice", precision: 22 })
  standardPrice: number;

  @Column("double", { name: "LastReceiptCost", nullable: true, precision: 22 })
  lastReceiptCost: number | null;

  @Column("datetime", { name: "LastReceiptDate", nullable: true })
  lastReceiptDate: Date | null;

  @Column("int", { name: "MinOrderQty", nullable: true })
  minOrderQty: number | null;

  @Column("int", { name: "MaxOrderQty" })
  maxOrderQty: number;

  @Column("int", { name: "OnOrderQty", nullable: true })
  onOrderQty: number | null;

  @Column("varchar", { name: "UnitMeasureCode", length: 3 })
  unitMeasureCode: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.productvendors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;

  @ManyToOne(() => Vendor, (vendor) => vendor.productvendors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "VendorID", referencedColumnName: "vendorId" }])
  vendor: Vendor;
}
