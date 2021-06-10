import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Contact } from "./Contact";
import { Employeeaddress } from "./Employeeaddress";
import { Employeedepartmenthistory } from "./Employeedepartmenthistory";
import { Employeepayhistory } from "./Employeepayhistory";
import { Jobcandidate } from "./Jobcandidate";
import { Purchaseorderheader } from "./Purchaseorderheader";

@Index("my_fk_11", ["contactId"], {})
@Index("my_fk_12", ["managerId"], {})
@Entity("employee", { schema: "adventureworks" })
export class Employee {
  @Column("int", { primary: true, name: "EmployeeID" })
  employeeId: number;

  @Column("varchar", { name: "NationalIDNumber", length: 15 })
  nationalIdNumber: string;

  @Column("int", { name: "ContactID" })
  contactId: number;

  @Column("varchar", { name: "LoginID", length: 256 })
  loginId: string;

  @Column("int", { name: "ManagerID", nullable: true })
  managerId: number | null;

  @Column("varchar", { name: "Title", length: 50 })
  title: string;

  @Column("datetime", { name: "BirthDate" })
  birthDate: Date;

  @Column("varchar", { name: "MaritalStatus", length: 1 })
  maritalStatus: string;

  @Column("varchar", { name: "Gender", length: 1 })
  gender: string;

  @Column("datetime", { name: "HireDate" })
  hireDate: Date;

  @Column("bit", { name: "SalariedFlag" })
  salariedFlag: boolean;

  @Column("smallint", { name: "VacationHours" })
  vacationHours: number;

  @Column("smallint", { name: "SickLeaveHours" })
  sickLeaveHours: number;

  @Column("bit", { name: "CurrentFlag" })
  currentFlag: boolean;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Contact, (contact) => contact.employees, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ContactID", referencedColumnName: "contactId" }])
  contact: Contact;

  @ManyToOne(() => Employee, (employee) => employee.employees, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ManagerID", referencedColumnName: "employeeId" }])
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  employees: Employee[];

  @OneToMany(
    () => Employeeaddress,
    (employeeaddress) => employeeaddress.employee
  )
  employeeaddresses: Employeeaddress[];

  @OneToMany(
    () => Employeedepartmenthistory,
    (employeedepartmenthistory) => employeedepartmenthistory.employee
  )
  employeedepartmenthistories: Employeedepartmenthistory[];

  @OneToMany(
    () => Employeepayhistory,
    (employeepayhistory) => employeepayhistory.employee
  )
  employeepayhistories: Employeepayhistory[];

  @OneToMany(() => Jobcandidate, (jobcandidate) => jobcandidate.employee)
  jobcandidates: Jobcandidate[];

  @OneToMany(
    () => Purchaseorderheader,
    (purchaseorderheader) => purchaseorderheader.employee
  )
  purchaseorderheaders: Purchaseorderheader[];
}
