import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Productmodelillustration } from "./Productmodelillustration";
import { Productmodelproductdescriptionculture } from "./Productmodelproductdescriptionculture";

@Entity("productmodel", { schema: "adventureworks" })
export class Productmodel {
  @PrimaryGeneratedColumn({ type: "int", name: "ProductModelID" })
  productModelId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("text", { name: "CatalogDescription", nullable: true })
  catalogDescription: string | null;

  @Column("text", { name: "Instructions", nullable: true })
  instructions: string | null;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(() => Product, (product) => product.productModel)
  products: Product[];

  @OneToMany(
    () => Productmodelillustration,
    (productmodelillustration) => productmodelillustration.productModel
  )
  productmodelillustrations: Productmodelillustration[];

  @OneToMany(
    () => Productmodelproductdescriptionculture,
    (productmodelproductdescriptionculture) =>
      productmodelproductdescriptionculture.productModel
  )
  productmodelproductdescriptioncultures: Productmodelproductdescriptionculture[];
}
