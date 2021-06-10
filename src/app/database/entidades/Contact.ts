import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contactcreditcard } from "./Contactcreditcard";
import { Employee } from "./Employee";
import { Individual } from "./Individual";
import { Salesorderheader } from "./Salesorderheader";
import { Storecontact } from "./Storecontact";
import { Vendorcontact } from "./Vendorcontact";

@Entity("contact", { schema: "adventureworks" })
export class Contact {
  @PrimaryGeneratedColumn({ type: "int", name: "ContactID" })
  contactId: number;

  @Column("bit", { name: "NameStyle" })
  nameStyle: boolean;

  @Column("varchar", { name: "Title", nullable: true, length: 8 })
  title: string | null;

  @Column("varchar", { name: "FirstName", length: 50 })
  firstName: string;

  @Column("varchar", { name: "MiddleName", nullable: true, length: 50 })
  middleName: string | null;

  @Column("varchar", { name: "LastName", length: 50 })
  lastName: string;

  @Column("varchar", { name: "Suffix", nullable: true, length: 10 })
  suffix: string | null;

  @Column("varchar", { name: "EmailAddress", nullable: true, length: 50 })
  emailAddress: string | null;

  @Column("int", { name: "EmailPromotion" })
  emailPromotion: number;

  @Column("varchar", { name: "Phone", nullable: true, length: 25 })
  phone: string | null;

  @Column("varchar", { name: "PasswordHash", length: 40 })
  passwordHash: string;

  @Column("varchar", { name: "PasswordSalt", length: 10 })
  passwordSalt: string;

  @Column("mediumtext", { name: "AdditionalContactInfo", nullable: true })
  additionalContactInfo: string | null;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Contactcreditcard,
    (contactcreditcard) => contactcreditcard.contact
  )
  contactcreditcards: Contactcreditcard[];

  @OneToMany(() => Employee, (employee) => employee.contact)
  employees: Employee[];

  @OneToMany(() => Individual, (individual) => individual.contact)
  individuals: Individual[];

  @OneToMany(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.contact
  )
  salesorderheaders: Salesorderheader[];

  @OneToMany(() => Storecontact, (storecontact) => storecontact.contact)
  storecontacts: Storecontact[];

  @OneToMany(() => Vendorcontact, (vendorcontact) => vendorcontact.contact)
  vendorcontacts: Vendorcontact[];
}
