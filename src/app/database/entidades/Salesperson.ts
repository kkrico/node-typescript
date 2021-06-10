import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Salesterritory } from "./Salesterritory";
import { Salespersonquotahistory } from "./Salespersonquotahistory";
import { Store } from "./Store";

@Index("my_fk_60", ["territoryId"], {})
@Entity("salesperson", { schema: "adventureworks" })
export class Salesperson {
  @Column("int", { primary: true, name: "SalesPersonID" })
  salesPersonId: number;

  @Column("int", { name: "TerritoryID", nullable: true })
  territoryId: number | null;

  @Column("double", { name: "SalesQuota", nullable: true, precision: 22 })
  salesQuota: number | null;

  @Column("double", { name: "Bonus", precision: 22 })
  bonus: number;

  @Column("double", { name: "CommissionPct", precision: 22 })
  commissionPct: number;

  @Column("double", { name: "SalesYTD", precision: 22 })
  salesYtd: number;

  @Column("double", { name: "SalesLastYear", precision: 22 })
  salesLastYear: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Salesterritory,
    (salesterritory) => salesterritory.salespeople,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "TerritoryID", referencedColumnName: "territoryId" }])
  territory: Salesterritory;

  @OneToMany(
    () => Salespersonquotahistory,
    (salespersonquotahistory) => salespersonquotahistory.salesPerson
  )
  salespersonquotahistories: Salespersonquotahistory[];

  @OneToMany(() => Store, (store) => store.salesPerson)
  stores: Store[];
}
