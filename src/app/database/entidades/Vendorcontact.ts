import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Contact } from "./Contact";

@Index("my_fk_78", ["contactId"], {})
@Entity("vendorcontact", { schema: "adventureworks" })
export class Vendorcontact {
  @Column("int", { primary: true, name: "VendorID" })
  vendorId: number;

  @Column("int", { primary: true, name: "ContactID" })
  contactId: number;

  @Column("int", { name: "ContactTypeID" })
  contactTypeId: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Contact, (contact) => contact.vendorcontacts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ContactID", referencedColumnName: "contactId" }])
  contact: Contact;
}
