import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productvendor } from "./Productvendor";
import { Purchaseorderheader } from "./Purchaseorderheader";
import { Vendoraddress } from "./Vendoraddress";

@Entity("vendor", { schema: "adventureworks" })
export class Vendor {
  @PrimaryGeneratedColumn({ type: "int", name: "VendorID" })
  vendorId: number;

  @Column("varchar", { name: "AccountNumber", length: 15 })
  accountNumber: string;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("tinyint", { name: "CreditRating" })
  creditRating: number;

  @Column("bit", { name: "PreferredVendorStatus", default: () => "'b'1''" })
  preferredVendorStatus: boolean;

  @Column("bit", { name: "ActiveFlag", default: () => "'b'1''" })
  activeFlag: boolean;

  @Column("mediumtext", { name: "PurchasingWebServiceURL", nullable: true })
  purchasingWebServiceUrl: string | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(() => Productvendor, (productvendor) => productvendor.vendor)
  productvendors: Productvendor[];

  @OneToMany(
    () => Purchaseorderheader,
    (purchaseorderheader) => purchaseorderheader.vendor
  )
  purchaseorderheaders: Purchaseorderheader[];

  @OneToMany(() => Vendoraddress, (vendoraddress) => vendoraddress.vendor)
  vendoraddresses: Vendoraddress[];
}
