import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Salesorderheader } from "./Salesorderheader";
import { Salesreason } from "./Salesreason";

@Index("my_fk_59", ["salesReasonId"], {})
@Entity("salesorderheadersalesreason", { schema: "adventureworks" })
export class Salesorderheadersalesreason {
  @Column("int", { primary: true, name: "SalesOrderID" })
  salesOrderId: number;

  @Column("int", { primary: true, name: "SalesReasonID" })
  salesReasonId: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.salesorderheadersalesreasons,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "SalesOrderID", referencedColumnName: "salesOrderId" }])
  salesOrder: Salesorderheader;

  @ManyToOne(
    () => Salesreason,
    (salesreason) => salesreason.salesorderheadersalesreasons,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "SalesReasonID", referencedColumnName: "salesReasonId" },
  ])
  salesReason: Salesreason;
}
