import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Salesterritory } from "./Salesterritory";

@Index("my_fk_63", ["territoryId"], {})
@Entity("salesterritoryhistory", { schema: "adventureworks" })
export class Salesterritoryhistory {
  @Column("int", { primary: true, name: "SalesPersonID" })
  salesPersonId: number;

  @Column("int", { primary: true, name: "TerritoryID" })
  territoryId: number;

  @Column("datetime", { primary: true, name: "StartDate" })
  startDate: Date;

  @Column("datetime", { name: "EndDate", nullable: true })
  endDate: Date | null;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Salesterritory,
    (salesterritory) => salesterritory.salesterritoryhistories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "TerritoryID", referencedColumnName: "territoryId" }])
  territory: Salesterritory;
}
