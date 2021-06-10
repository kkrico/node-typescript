import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Entity("productcosthistory", { schema: "adventureworks" })
export class Productcosthistory {
  @Column("int", { primary: true, name: "ProductID" })
  productId: number;

  @Column("datetime", { primary: true, name: "StartDate" })
  startDate: Date;

  @Column("datetime", { name: "EndDate", nullable: true })
  endDate: Date | null;

  @Column("double", { name: "StandardCost", precision: 22 })
  standardCost: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.productcosthistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;
}
