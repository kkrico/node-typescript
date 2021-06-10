import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Salesorderheader } from "./Salesorderheader";

@Entity("currencyrate", { schema: "adventureworks" })
export class Currencyrate {
  @PrimaryGeneratedColumn({ type: "int", name: "CurrencyRateID" })
  currencyRateId: number;

  @Column("datetime", { name: "CurrencyRateDate" })
  currencyRateDate: Date;

  @Column("varchar", { name: "FromCurrencyCode", length: 3 })
  fromCurrencyCode: string;

  @Column("varchar", { name: "ToCurrencyCode", length: 3 })
  toCurrencyCode: string;

  @Column("double", { name: "AverageRate", precision: 22 })
  averageRate: number;

  @Column("double", { name: "EndOfDayRate", precision: 22 })
  endOfDayRate: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.currencyRate
  )
  salesorderheaders: Salesorderheader[];
}
