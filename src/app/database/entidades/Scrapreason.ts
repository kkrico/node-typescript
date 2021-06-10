import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Workorder } from "./Workorder";

@Entity("scrapreason", { schema: "adventureworks" })
export class Scrapreason {
  @PrimaryGeneratedColumn({ type: "smallint", name: "ScrapReasonID" })
  scrapReasonId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(() => Workorder, (workorder) => workorder.scrapReason)
  workorders: Workorder[];
}
