import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Salesperson } from "./Salesperson";

@Entity("salespersonquotahistory", { schema: "adventureworks" })
export class Salespersonquotahistory {
  @Column("int", { primary: true, name: "SalesPersonID" })
  salesPersonId: number;

  @Column("datetime", { primary: true, name: "QuotaDate" })
  quotaDate: Date;

  @Column("double", { name: "SalesQuota", precision: 22 })
  salesQuota: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Salesperson,
    (salesperson) => salesperson.salespersonquotahistories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "SalesPersonID", referencedColumnName: "salesPersonId" },
  ])
  salesPerson: Salesperson;
}
