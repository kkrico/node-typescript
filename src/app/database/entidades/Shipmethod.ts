import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Purchaseorderheader } from "./Purchaseorderheader";
import { Salesorderheader } from "./Salesorderheader";

@Entity("shipmethod", { schema: "adventureworks" })
export class Shipmethod {
  @PrimaryGeneratedColumn({ type: "int", name: "ShipMethodID" })
  shipMethodId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("double", { name: "ShipBase", precision: 22, default: () => "'0'" })
  shipBase: number;

  @Column("double", { name: "ShipRate", precision: 22, default: () => "'0'" })
  shipRate: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Purchaseorderheader,
    (purchaseorderheader) => purchaseorderheader.shipMethod
  )
  purchaseorderheaders: Purchaseorderheader[];

  @OneToMany(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.shipMethod
  )
  salesorderheaders: Salesorderheader[];
}
