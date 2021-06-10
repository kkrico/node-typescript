import { Column, Entity, OneToMany } from "typeorm";
import { Productmodelproductdescriptionculture } from "./Productmodelproductdescriptionculture";

@Entity("culture", { schema: "adventureworks" })
export class Culture {
  @Column("varchar", { primary: true, name: "CultureID", length: 6 })
  cultureId: string;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Productmodelproductdescriptionculture,
    (productmodelproductdescriptionculture) =>
      productmodelproductdescriptionculture.culture
  )
  productmodelproductdescriptioncultures: Productmodelproductdescriptionculture[];
}
