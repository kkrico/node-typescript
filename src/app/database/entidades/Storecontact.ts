import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Customer } from "./Customer";
import { Contact } from "./Contact";
import { Contacttype } from "./Contacttype";

@Index("my_fk_71", ["contactId"], {})
@Index("my_fk_72", ["contactTypeId"], {})
@Entity("storecontact", { schema: "adventureworks" })
export class Storecontact {
  @Column("int", { primary: true, name: "CustomerID" })
  customerId: number;

  @Column("int", { primary: true, name: "ContactID" })
  contactId: number;

  @Column("int", { name: "ContactTypeID" })
  contactTypeId: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Customer, (customer) => customer.storecontacts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "CustomerID", referencedColumnName: "customerId" }])
  customer: Customer;

  @ManyToOne(() => Contact, (contact) => contact.storecontacts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ContactID", referencedColumnName: "contactId" }])
  contact: Contact;

  @ManyToOne(() => Contacttype, (contacttype) => contacttype.storecontacts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "ContactTypeID", referencedColumnName: "contactTypeId" },
  ])
  contactType: Contacttype;
}
