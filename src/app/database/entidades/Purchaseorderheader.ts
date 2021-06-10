import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Purchaseorderdetail } from "./Purchaseorderdetail";
import { Employee } from "./Employee";
import { Vendor } from "./Vendor";
import { Shipmethod } from "./Shipmethod";

@Index("my_fk_43", ["employeeId"], {})
@Index("my_fk_44", ["vendorId"], {})
@Index("my_fk_45", ["shipMethodId"], {})
@Entity("purchaseorderheader", { schema: "adventureworks" })
export class Purchaseorderheader {
  @Column("int", {
    primary: true,
    name: "PurchaseOrderID",
    default: () => "'0'",
  })
  purchaseOrderId: number;

  @Column("tinyint", { name: "RevisionNumber", nullable: true })
  revisionNumber: number | null;

  @Column("tinyint", { name: "Status", nullable: true })
  status: number | null;

  @Column("int", { name: "EmployeeID", nullable: true })
  employeeId: number | null;

  @Column("int", { name: "VendorID", nullable: true })
  vendorId: number | null;

  @Column("int", { name: "ShipMethodID", nullable: true })
  shipMethodId: number | null;

  @Column("datetime", { name: "OrderDate", nullable: true })
  orderDate: Date | null;

  @Column("datetime", { name: "ShipDate", nullable: true })
  shipDate: Date | null;

  @Column("double", { name: "SubTotal", nullable: true, precision: 22 })
  subTotal: number | null;

  @Column("double", { name: "TaxAmt", nullable: true, precision: 22 })
  taxAmt: number | null;

  @Column("double", { name: "Freight", nullable: true, precision: 22 })
  freight: number | null;

  @Column("double", { name: "TotalDue", nullable: true, precision: 22 })
  totalDue: number | null;

  @Column("datetime", { name: "ModifiedDate", nullable: true })
  modifiedDate: Date | null;

  @OneToMany(
    () => Purchaseorderdetail,
    (purchaseorderdetail) => purchaseorderdetail.purchaseOrder
  )
  purchaseorderdetails: Purchaseorderdetail[];

  @ManyToOne(() => Employee, (employee) => employee.purchaseorderheaders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "EmployeeID", referencedColumnName: "employeeId" }])
  employee: Employee;

  @ManyToOne(() => Vendor, (vendor) => vendor.purchaseorderheaders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "VendorID", referencedColumnName: "vendorId" }])
  vendor: Vendor;

  @ManyToOne(
    () => Shipmethod,
    (shipmethod) => shipmethod.purchaseorderheaders,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "ShipMethodID", referencedColumnName: "shipMethodId" }])
  shipMethod: Shipmethod;
}
