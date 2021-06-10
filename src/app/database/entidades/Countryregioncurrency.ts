import { Column, Entity } from "typeorm";

@Entity("countryregioncurrency", { schema: "adventureworks" })
export class Countryregioncurrency {
  @Column("varchar", { primary: true, name: "CountryRegionCode", length: 3 })
  countryRegionCode: string;

  @Column("varchar", { primary: true, name: "CurrencyCode", length: 3 })
  currencyCode: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;
}
