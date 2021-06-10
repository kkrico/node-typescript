import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Employee } from "./Employee";

@Entity("employeepayhistory", { schema: "adventureworks" })
export class Employeepayhistory {
  @Column("int", { primary: true, name: "EmployeeID" })
  employeeId: number;

  @Column("datetime", { primary: true, name: "RateChangeDate" })
  rateChangeDate: Date;

  @Column("double", { name: "Rate", precision: 22 })
  rate: number;

  @Column("tinyint", { name: "PayFrequency" })
  payFrequency: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Employee, (employee) => employee.employeepayhistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "EmployeeID", referencedColumnName: "employeeId" }])
  employee: Employee;
}
