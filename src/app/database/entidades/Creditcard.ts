import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contactcreditcard } from "./Contactcreditcard";
import { Salesorderheader } from "./Salesorderheader";

@Entity("creditcard", { schema: "adventureworks" })
export class Creditcard {
  @PrimaryGeneratedColumn({ type: "int", name: "CreditCardID" })
  creditCardId: number;

  @Column("varchar", { name: "CardType", length: 50 })
  cardType: string;

  @Column("varchar", { name: "CardNumber", length: 25 })
  cardNumber: string;

  @Column("tinyint", { name: "ExpMonth" })
  expMonth: number;

  @Column("smallint", { name: "ExpYear" })
  expYear: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Contactcreditcard,
    (contactcreditcard) => contactcreditcard.creditCard
  )
  contactcreditcards: Contactcreditcard[];

  @OneToMany(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.creditCard
  )
  salesorderheaders: Salesorderheader[];
}
