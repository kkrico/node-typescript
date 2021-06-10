import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Productmodel } from "./Productmodel";
import { Illustration } from "./Illustration";

@Index("my_fk_31", ["illustrationId"], {})
@Entity("productmodelillustration", { schema: "adventureworks" })
export class Productmodelillustration {
  @Column("int", { primary: true, name: "ProductModelID" })
  productModelId: number;

  @Column("int", { primary: true, name: "IllustrationID" })
  illustrationId: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Productmodel,
    (productmodel) => productmodel.productmodelillustrations,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "ProductModelID", referencedColumnName: "productModelId" },
  ])
  productModel: Productmodel;

  @ManyToOne(
    () => Illustration,
    (illustration) => illustration.productmodelillustrations,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "IllustrationID", referencedColumnName: "illustrationId" },
  ])
  illustration: Illustration;
}
