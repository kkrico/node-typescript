import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customeraddress } from "./Customeraddress";
import { Vendoraddress } from "./Vendoraddress";

@Entity("addresstype", { schema: "adventureworks" })
export class Addresstype {
  @PrimaryGeneratedColumn({ type: "int", name: "AddressTypeID" })
  addressTypeId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Customeraddress,
    (customeraddress) => customeraddress.addressType
  )
  customeraddresses: Customeraddress[];

  @OneToMany(() => Vendoraddress, (vendoraddress) => vendoraddress.addressType)
  vendoraddresses: Vendoraddress[];
}
