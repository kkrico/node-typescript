import { Column, Entity } from "typeorm";

@Entity("unitmeasure", { schema: "adventureworks" })
export class Unitmeasure {
  @Column("varchar", { primary: true, name: "UnitMeasureCode", length: 3 })
  unitMeasureCode: string;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;
}
