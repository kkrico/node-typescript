import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productinventory } from "./Productinventory";
import { Workorderrouting } from "./Workorderrouting";

@Entity("location", { schema: "adventureworks" })
export class Location {
  @PrimaryGeneratedColumn({ type: "smallint", name: "LocationID" })
  locationId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("double", { name: "CostRate", precision: 22 })
  costRate: number;

  @Column("decimal", { name: "Availability", precision: 8, scale: 2 })
  availability: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Productinventory,
    (productinventory) => productinventory.location
  )
  productinventories: Productinventory[];

  @OneToMany(
    () => Workorderrouting,
    (workorderrouting) => workorderrouting.location
  )
  workorderroutings: Workorderrouting[];
}
