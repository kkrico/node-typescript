import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Entity("productlistpricehistory", { schema: "adventureworks" })
export class Productlistpricehistory {
  @Column("int", { primary: true, name: "ProductID" })
  productId: number;

  @Column("datetime", { primary: true, name: "StartDate" })
  startDate: Date;

  @Column("datetime", { name: "EndDate", nullable: true })
  endDate: Date | null;

  @Column("double", { name: "ListPrice", precision: 22 })
  listPrice: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.productlistpricehistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;
}
