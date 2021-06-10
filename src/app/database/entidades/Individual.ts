import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Customer } from "./Customer";
import { Contact } from "./Contact";

@Index("my_fk_20", ["contactId"], {})
@Entity("individual", { schema: "adventureworks" })
export class Individual {
  @Column("int", { primary: true, name: "CustomerID" })
  customerId: number;

  @Column("int", { name: "ContactID" })
  contactId: number;

  @Column("text", { name: "Demographics", nullable: true })
  demographics: string | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToOne(() => Customer, (customer) => customer.individual, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "CustomerID", referencedColumnName: "customerId" }])
  customer: Customer;

  @ManyToOne(() => Contact, (contact) => contact.individuals, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ContactID", referencedColumnName: "contactId" }])
  contact: Contact;
}
