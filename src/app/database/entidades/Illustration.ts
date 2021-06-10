import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productmodelillustration } from "./Productmodelillustration";

@Entity("illustration", { schema: "adventureworks" })
export class Illustration {
  @PrimaryGeneratedColumn({ type: "int", name: "IllustrationID" })
  illustrationId: number;

  @Column("text", { name: "Diagram", nullable: true })
  diagram: string | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Productmodelillustration,
    (productmodelillustration) => productmodelillustration.illustration
  )
  productmodelillustrations: Productmodelillustration[];
}
