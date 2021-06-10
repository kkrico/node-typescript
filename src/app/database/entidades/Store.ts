import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Customer } from "./Customer";
import { Salesperson } from "./Salesperson";

@Index("my_fk_69", ["salesPersonId"], {})
@Entity("store", { schema: "adventureworks" })
export class Store {
  @Column("int", { primary: true, name: "CustomerID" })
  customerId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("int", { name: "SalesPersonID", nullable: true })
  salesPersonId: number | null;

  @Column("text", { name: "Demographics", nullable: true })
  demographics: string | null;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToOne(() => Customer, (customer) => customer.store, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "CustomerID", referencedColumnName: "customerId" }])
  customer: Customer;

  @ManyToOne(() => Salesperson, (salesperson) => salesperson.stores, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "SalesPersonID", referencedColumnName: "salesPersonId" },
  ])
  salesPerson: Salesperson;
}
