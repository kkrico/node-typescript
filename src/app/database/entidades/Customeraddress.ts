import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Addresstype } from "./Addresstype";
import { Customer } from "./Customer";
import { Address } from "./Address";

@Index("my_fk_9", ["addressId"], {})
@Index("my_fk_10", ["addressTypeId"], {})
@Entity("customeraddress", { schema: "adventureworks" })
export class Customeraddress {
  @Column("int", { primary: true, name: "CustomerID" })
  customerId: number;

  @Column("int", { primary: true, name: "AddressID" })
  addressId: number;

  @Column("int", { name: "AddressTypeID" })
  addressTypeId: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Addresstype,
    (addresstype) => addresstype.customeraddresses,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "AddressTypeID", referencedColumnName: "addressTypeId" },
  ])
  addressType: Addresstype;

  @ManyToOne(() => Customer, (customer) => customer.customeraddresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "CustomerID", referencedColumnName: "customerId" }])
  customer: Customer;

  @ManyToOne(() => Address, (address) => address.customeraddresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "AddressID", referencedColumnName: "addressId" }])
  address: Address;
}
