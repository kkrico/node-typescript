import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productmodelproductdescriptionculture } from "./Productmodelproductdescriptionculture";

@Entity("productdescription", { schema: "adventureworks" })
export class Productdescription {
  @PrimaryGeneratedColumn({ type: "int", name: "ProductDescriptionID" })
  productDescriptionId: number;

  @Column("mediumtext", { name: "Description" })
  description: string;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Productmodelproductdescriptionculture,
    (productmodelproductdescriptionculture) =>
      productmodelproductdescriptionculture.productDescription
  )
  productmodelproductdescriptioncultures: Productmodelproductdescriptionculture[];
}
