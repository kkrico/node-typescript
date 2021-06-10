import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("errorlog", { schema: "adventureworks" })
export class Errorlog {
  @PrimaryGeneratedColumn({ type: "int", name: "ErrorLogID" })
  errorLogId: number;

  @Column("timestamp", {
    name: "ErrorTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  errorTime: Date;

  @Column("varchar", { name: "UserName", length: 128 })
  userName: string;

  @Column("int", { name: "ErrorNumber" })
  errorNumber: number;

  @Column("int", { name: "ErrorSeverity", nullable: true })
  errorSeverity: number | null;

  @Column("int", { name: "ErrorState", nullable: true })
  errorState: number | null;

  @Column("varchar", { name: "ErrorProcedure", nullable: true, length: 126 })
  errorProcedure: string | null;

  @Column("int", { name: "ErrorLine", nullable: true })
  errorLine: number | null;

  @Column("mediumtext", { name: "ErrorMessage" })
  errorMessage: string;
}
