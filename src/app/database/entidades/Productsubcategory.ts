import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Productcategory } from "./Productcategory";

@Index("my_fk_38", ["productCategoryId"], {})
@Entity("productsubcategory", { schema: "adventureworks" })
export class Productsubcategory {
  @PrimaryGeneratedColumn({ type: "int", name: "ProductSubcategoryID" })
  productSubcategoryId: number;

  @Column("int", { name: "ProductCategoryID" })
  productCategoryId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Productcategory,
    (productcategory) => productcategory.productsubcategories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "ProductCategoryID", referencedColumnName: "productCategoryId" },
  ])
  productCategory: Productcategory;
}
