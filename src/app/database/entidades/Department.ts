import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employeedepartmenthistory } from "./Employeedepartmenthistory";

@Entity("department", { schema: "adventureworks" })
export class Department {
  @PrimaryGeneratedColumn({ type: "smallint", name: "DepartmentID" })
  departmentId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("varchar", { name: "GroupName", length: 50 })
  groupName: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Employeedepartmenthistory,
    (employeedepartmenthistory) => employeedepartmenthistory.department
  )
  employeedepartmenthistories: Employeedepartmenthistory[];
}
