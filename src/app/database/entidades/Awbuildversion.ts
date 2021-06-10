import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("awbuildversion", { schema: "adventureworks" })
export class Awbuildversion {
  @PrimaryGeneratedColumn({ type: "int", name: "SystemInformationID" })
  systemInformationId: number;

  @Column("varchar", { name: "Database Version", length: 25 })
  databaseVersion: string;

  @Column("datetime", { name: "VersionDate" })
  versionDate: Date;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;
}
