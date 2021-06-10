import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Employee } from "./Employee";
import { Address } from "./Address";

@Index("my_fk_14", ["addressId"], {})
@Entity("employeeaddress", { schema: "adventureworks" })
export class Employeeaddress {
  @Column("int", { primary: true, name: "EmployeeID" })
  employeeId: number;

  @Column("int", { primary: true, name: "AddressID" })
  addressId: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Employee, (employee) => employee.employeeaddresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "EmployeeID", referencedColumnName: "employeeId" }])
  employee: Employee;

  @ManyToOne(() => Address, (address) => address.employeeaddresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "AddressID", referencedColumnName: "addressId" }])
  address: Address;
}
