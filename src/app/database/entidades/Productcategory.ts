import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productsubcategory } from "./Productsubcategory";

@Entity("productcategory", { schema: "adventureworks" })
export class Productcategory {
  @PrimaryGeneratedColumn({ type: "int", name: "ProductCategoryID" })
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

  @OneToMany(
    () => Productsubcategory,
    (productsubcategory) => productsubcategory.productCategory
  )
  productsubcategories: Productsubcategory[];
}
