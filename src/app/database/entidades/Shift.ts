import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employeedepartmenthistory } from "./Employeedepartmenthistory";

@Entity("shift", { schema: "adventureworks" })
export class Shift {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "ShiftID" })
  shiftId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("datetime", { name: "StartTime" })
  startTime: Date;

  @Column("datetime", { name: "EndTime" })
  endTime: Date;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Employeedepartmenthistory,
    (employeedepartmenthistory) => employeedepartmenthistory.shift
  )
  employeedepartmenthistories: Employeedepartmenthistory[];
}
