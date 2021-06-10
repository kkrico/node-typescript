import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Productmodel } from "./Productmodel";
import { Productdescription } from "./Productdescription";
import { Culture } from "./Culture";

@Index("my_fk_33", ["productDescriptionId"], {})
@Index("my_fk_34", ["cultureId"], {})
@Entity("productmodelproductdescriptionculture", { schema: "adventureworks" })
export class Productmodelproductdescriptionculture {
  @Column("int", { primary: true, name: "ProductModelID" })
  productModelId: number;

  @Column("int", { primary: true, name: "ProductDescriptionID" })
  productDescriptionId: number;

  @Column("varchar", { primary: true, name: "CultureID", length: 6 })
  cultureId: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Productmodel,
    (productmodel) => productmodel.productmodelproductdescriptioncultures,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "ProductModelID", referencedColumnName: "productModelId" },
  ])
  productModel: Productmodel;

  @ManyToOne(
    () => Productdescription,
    (productdescription) =>
      productdescription.productmodelproductdescriptioncultures,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    {
      name: "ProductDescriptionID",
      referencedColumnName: "productDescriptionId",
    },
  ])
  productDescription: Productdescription;

  @ManyToOne(
    () => Culture,
    (culture) => culture.productmodelproductdescriptioncultures,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "CultureID", referencedColumnName: "cultureId" }])
  culture: Culture;
}
