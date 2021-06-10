import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Salesorderdetail } from "./Salesorderdetail";
import { Customer } from "./Customer";
import { Contact } from "./Contact";
import { Salesterritory } from "./Salesterritory";
import { Address } from "./Address";
import { Shipmethod } from "./Shipmethod";
import { Creditcard } from "./Creditcard";
import { Currencyrate } from "./Currencyrate";
import { Salesorderheadersalesreason } from "./Salesorderheadersalesreason";

@Index("my_fk_49", ["customerId"], {})
@Index("my_fk_50", ["contactId"], {})
@Index("my_fk_52", ["territoryId"], {})
@Index("my_fk_53", ["billToAddressId"], {})
@Index("my_fk_54", ["shipToAddressId"], {})
@Index("my_fk_55", ["shipMethodId"], {})
@Index("my_fk_56", ["creditCardId"], {})
@Index("my_fk_57", ["currencyRateId"], {})
@Entity("salesorderheader", { schema: "adventureworks" })
export class Salesorderheader {
  @Column("int", { primary: true, name: "SalesOrderID" })
  salesOrderId: number;

  @Column("tinyint", { name: "RevisionNumber" })
  revisionNumber: number;

  @Column("timestamp", {
    name: "OrderDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  orderDate: Date;

  @Column("datetime", { name: "DueDate" })
  dueDate: Date;

  @Column("datetime", { name: "ShipDate" })
  shipDate: Date;

  @Column("tinyint", { name: "Status" })
  status: number;

  @Column("bit", { name: "OnlineOrderFlag" })
  onlineOrderFlag: boolean;

  @Column("varchar", { name: "SalesOrderNumber", length: 25 })
  salesOrderNumber: string;

  @Column("varchar", {
    name: "PurchaseOrderNumber",
    nullable: true,
    length: 25,
  })
  purchaseOrderNumber: string | null;

  @Column("varchar", { name: "AccountNumber", nullable: true, length: 15 })
  accountNumber: string | null;

  @Column("int", { name: "CustomerID" })
  customerId: number;

  @Column("int", { name: "ContactID" })
  contactId: number;

  @Column("int", { name: "SalesPersonID", nullable: true })
  salesPersonId: number | null;

  @Column("int", { name: "TerritoryID", nullable: true })
  territoryId: number | null;

  @Column("int", { name: "BillToAddressID" })
  billToAddressId: number;

  @Column("int", { name: "ShipToAddressID" })
  shipToAddressId: number;

  @Column("int", { name: "ShipMethodID" })
  shipMethodId: number;

  @Column("int", { name: "CreditCardID", nullable: true })
  creditCardId: number | null;

  @Column("varchar", {
    name: "CreditCardApprovalCode",
    nullable: true,
    length: 15,
  })
  creditCardApprovalCode: string | null;

  @Column("int", { name: "CurrencyRateID", nullable: true })
  currencyRateId: number | null;

  @Column("double", { name: "SubTotal", precision: 22 })
  subTotal: number;

  @Column("double", { name: "TaxAmt", precision: 22 })
  taxAmt: number;

  @Column("double", { name: "Freight", precision: 22 })
  freight: number;

  @Column("double", { name: "TotalDue", precision: 22 })
  totalDue: number;

  @Column("varchar", { name: "Comment", nullable: true, length: 128 })
  comment: string | null;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Salesorderdetail,
    (salesorderdetail) => salesorderdetail.salesOrder
  )
  salesorderdetails: Salesorderdetail[];

  @ManyToOne(() => Customer, (customer) => customer.salesorderheaders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "CustomerID", referencedColumnName: "customerId" }])
  customer: Customer;

  @ManyToOne(() => Contact, (contact) => contact.salesorderheaders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ContactID", referencedColumnName: "contactId" }])
  contact: Contact;

  @ManyToOne(
    () => Salesterritory,
    (salesterritory) => salesterritory.salesorderheaders,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "TerritoryID", referencedColumnName: "territoryId" }])
  territory: Salesterritory;

  @ManyToOne(() => Address, (address) => address.salesorderheaders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "BillToAddressID", referencedColumnName: "addressId" }])
  billToAddress: Address;

  @ManyToOne(() => Address, (address) => address.salesorderheaders2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ShipToAddressID", referencedColumnName: "addressId" }])
  shipToAddress: Address;

  @ManyToOne(() => Shipmethod, (shipmethod) => shipmethod.salesorderheaders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ShipMethodID", referencedColumnName: "shipMethodId" }])
  shipMethod: Shipmethod;

  @ManyToOne(() => Creditcard, (creditcard) => creditcard.salesorderheaders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "CreditCardID", referencedColumnName: "creditCardId" }])
  creditCard: Creditcard;

  @ManyToOne(
    () => Currencyrate,
    (currencyrate) => currencyrate.salesorderheaders,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "CurrencyRateID", referencedColumnName: "currencyRateId" },
  ])
  currencyRate: Currencyrate;

  @OneToMany(
    () => Salesorderheadersalesreason,
    (salesorderheadersalesreason) => salesorderheadersalesreason.salesOrder
  )
  salesorderheadersalesreasons: Salesorderheadersalesreason[];
}
