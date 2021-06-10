import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Storecontact } from "./Storecontact";

@Entity("contacttype", { schema: "adventureworks" })
export class Contacttype {
  @PrimaryGeneratedColumn({ type: "int", name: "ContactTypeID" })
  contactTypeId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(() => Storecontact, (storecontact) => storecontact.contactType)
  storecontacts: Storecontact[];
}
