import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Salesorderheadersalesreason } from "./Salesorderheadersalesreason";

@Entity("salesreason", { schema: "adventureworks" })
export class Salesreason {
  @PrimaryGeneratedColumn({ type: "int", name: "SalesReasonID" })
  salesReasonId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("varchar", { name: "ReasonType", length: 50 })
  reasonType: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Salesorderheadersalesreason,
    (salesorderheadersalesreason) => salesorderheadersalesreason.salesReason
  )
  salesorderheadersalesreasons: Salesorderheadersalesreason[];
}
