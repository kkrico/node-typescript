import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("specialoffer", { schema: "adventureworks" })
export class Specialoffer {
  @PrimaryGeneratedColumn({ type: "int", name: "SpecialOfferID" })
  specialOfferId: number;

  @Column("varchar", { name: "Description", length: 255 })
  description: string;

  @Column("double", {
    name: "DiscountPct",
    precision: 22,
    default: () => "'0'",
  })
  discountPct: number;

  @Column("varchar", { name: "Type", length: 50 })
  type: string;

  @Column("varchar", { name: "Category", length: 50 })
  category: string;

  @Column("datetime", { name: "StartDate" })
  startDate: Date;

  @Column("datetime", { name: "EndDate" })
  endDate: Date;

  @Column("int", { name: "MinQty", default: () => "'0'" })
  minQty: number;

  @Column("int", { name: "MaxQty", nullable: true })
  maxQty: number | null;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;
}
