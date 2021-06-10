import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Vendor } from "./Vendor";
import { Address } from "./Address";
import { Addresstype } from "./Addresstype";

@Index("my_fk_76", ["addressId"], {})
@Index("my_fk_77", ["addressTypeId"], {})
@Entity("vendoraddress", { schema: "adventureworks" })
export class Vendoraddress {
  @Column("int", { primary: true, name: "VendorID" })
  vendorId: number;

  @Column("int", { primary: true, name: "AddressID" })
  addressId: number;

  @Column("int", { name: "AddressTypeID" })
  addressTypeId: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Vendor, (vendor) => vendor.vendoraddresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "VendorID", referencedColumnName: "vendorId" }])
  vendor: Vendor;

  @ManyToOne(() => Address, (address) => address.vendoraddresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "AddressID", referencedColumnName: "addressId" }])
  address: Address;

  @ManyToOne(() => Addresstype, (addresstype) => addresstype.vendoraddresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "AddressTypeID", referencedColumnName: "addressTypeId" },
  ])
  addressType: Addresstype;
}
