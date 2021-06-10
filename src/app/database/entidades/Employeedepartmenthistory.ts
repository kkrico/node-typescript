import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Employee } from "./Employee";
import { Department } from "./Department";
import { Shift } from "./Shift";

@Index("my_fk_16", ["departmentId"], {})
@Index("my_fk_17", ["shiftId"], {})
@Entity("employeedepartmenthistory", { schema: "adventureworks" })
export class Employeedepartmenthistory {
  @Column("int", { primary: true, name: "EmployeeID" })
  employeeId: number;

  @Column("smallint", { primary: true, name: "DepartmentID" })
  departmentId: number;

  @Column("tinyint", { primary: true, name: "ShiftID" })
  shiftId: number;

  @Column("datetime", { primary: true, name: "StartDate" })
  startDate: Date;

  @Column("datetime", { name: "EndDate", nullable: true })
  endDate: Date | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(
    () => Employee,
    (employee) => employee.employeedepartmenthistories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "EmployeeID", referencedColumnName: "employeeId" }])
  employee: Employee;

  @ManyToOne(
    () => Department,
    (department) => department.employeedepartmenthistories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "DepartmentID", referencedColumnName: "departmentId" }])
  department: Department;

  @ManyToOne(() => Shift, (shift) => shift.employeedepartmenthistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ShiftID", referencedColumnName: "shiftId" }])
  shift: Shift;
}
