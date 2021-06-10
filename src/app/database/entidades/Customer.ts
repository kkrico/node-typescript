import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Salesterritory } from "./Salesterritory";
import { Customeraddress } from "./Customeraddress";
import { Individual } from "./Individual";
import { Salesorderheader } from "./Salesorderheader";
import { Store } from "./Store";
import { Storecontact } from "./Storecontact";

@Index("my_fk_7", ["territoryId"], {})
@Entity("customer", { schema: "adventureworks" })
export class Customer {
  @PrimaryGeneratedColumn({ type: "int", name: "CustomerID" })
  customerId: number;

  @Column("int", { name: "TerritoryID", nullable: true })
  territoryId: number | null;

  @Column("varchar", { name: "AccountNumber", length: 10 })
  accountNumber: string;

  @Column("varchar", { name: "CustomerType", length: 1 })
  customerType: string;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Salesterritory,
    (salesterritory) => salesterritory.customers,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "TerritoryID", referencedColumnName: "territoryId" }])
  territory: Salesterritory;

  @OneToMany(
    () => Customeraddress,
    (customeraddress) => customeraddress.customer
  )
  customeraddresses: Customeraddress[];

  @OneToOne(() => Individual, (individual) => individual.customer)
  individual: Individual;

  @OneToMany(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.customer
  )
  salesorderheaders: Salesorderheader[];

  @OneToOne(() => Store, (store) => store.customer)
  store: Store;

  @OneToMany(() => Storecontact, (storecontact) => storecontact.customer)
  storecontacts: Storecontact[];
}
