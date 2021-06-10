import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Stateprovince } from "./Stateprovince";
import { Customeraddress } from "./Customeraddress";
import { Employeeaddress } from "./Employeeaddress";
import { Salesorderheader } from "./Salesorderheader";
import { Vendoraddress } from "./Vendoraddress";

@Index("my_fk_0", ["stateProvinceId"], {})
@Entity("address", { schema: "adventureworks" })
export class Address {
  @PrimaryGeneratedColumn({ type: "int", name: "AddressID" })
  addressId: number;

  @Column("varchar", { name: "AddressLine1", length: 60 })
  addressLine1: string;

  @Column("varchar", { name: "AddressLine2", nullable: true, length: 60 })
  addressLine2: string | null;

  @Column("varchar", { name: "City", length: 30 })
  city: string;

  @Column("int", { name: "StateProvinceID" })
  stateProvinceId: number;

  @Column("varchar", { name: "PostalCode", length: 15 })
  postalCode: string;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Stateprovince, (stateprovince) => stateprovince.addresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "StateProvinceID", referencedColumnName: "stateProvinceId" },
  ])
  stateProvince: Stateprovince;

  @OneToMany(
    () => Customeraddress,
    (customeraddress) => customeraddress.address
  )
  customeraddresses: Customeraddress[];

  @OneToMany(
    () => Employeeaddress,
    (employeeaddress) => employeeaddress.address
  )
  employeeaddresses: Employeeaddress[];

  @OneToMany(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.billToAddress
  )
  salesorderheaders: Salesorderheader[];

  @OneToMany(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.shipToAddress
  )
  salesorderheaders2: Salesorderheader[];

  @OneToMany(() => Vendoraddress, (vendoraddress) => vendoraddress.address)
  vendoraddresses: Vendoraddress[];
}
