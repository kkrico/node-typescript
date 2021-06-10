import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("databaselog", { schema: "adventureworks" })
export class Databaselog {
  @PrimaryGeneratedColumn({ type: "int", name: "DatabaseLogID" })
  databaseLogId: number;

  @Column("timestamp", { name: "PostTime", default: () => "CURRENT_TIMESTAMP" })
  postTime: Date;

  @Column("varchar", { name: "DatabaseUser", length: 128 })
  databaseUser: string;

  @Column("varchar", { name: "Event", length: 128 })
  event: string;

  @Column("varchar", { name: "Schema", nullable: true, length: 128 })
  schema: string | null;

  @Column("varchar", { name: "Object", nullable: true, length: 128 })
  object: string | null;

  @Column("mediumtext", { name: "TSQL" })
  tsql: string;

  @Column("mediumtext", { name: "XmlEvent" })
  xmlEvent: string;
}
