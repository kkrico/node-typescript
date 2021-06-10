import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Contact } from "./Contact";
import { Creditcard } from "./Creditcard";

@Index("my_fk_4", ["creditCardId"], {})
@Entity("contactcreditcard", { schema: "adventureworks" })
export class Contactcreditcard {
  @Column("int", { primary: true, name: "ContactID" })
  contactId: number;

  @Column("int", { primary: true, name: "CreditCardID" })
  creditCardId: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Contact, (contact) => contact.contactcreditcards, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ContactID", referencedColumnName: "contactId" }])
  contact: Contact;

  @ManyToOne(() => Creditcard, (creditcard) => creditcard.contactcreditcards, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "CreditCardID", referencedColumnName: "creditCardId" }])
  creditCard: Creditcard;
}
