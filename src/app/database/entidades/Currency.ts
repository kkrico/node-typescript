import { Column, Entity } from "typeorm";

@Entity("currency", { schema: "adventureworks" })
export class Currency {
  @Column("varchar", { primary: true, name: "CurrencyCode", length: 3 })
  currencyCode: string;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;
}
