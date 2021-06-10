import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Employee } from "./Employee";

@Index("my_fk_21", ["employeeId"], {})
@Entity("jobcandidate", { schema: "adventureworks" })
export class Jobcandidate {
  @PrimaryGeneratedColumn({ type: "int", name: "JobCandidateID" })
  jobCandidateId: number;

  @Column("int", { name: "EmployeeID", nullable: true })
  employeeId: number | null;

  @Column("text", { name: "Resume", nullable: true })
  resume: string | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Employee, (employee) => employee.jobcandidates, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "EmployeeID", referencedColumnName: "employeeId" }])
  employee: Employee;
}
