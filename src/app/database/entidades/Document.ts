import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productdocument } from "./Productdocument";

@Entity("document", { schema: "adventureworks" })
export class Document {
  @PrimaryGeneratedColumn({ type: "int", name: "DocumentID" })
  documentId: number;

  @Column("varchar", { name: "Title", length: 50 })
  title: string;

  @Column("mediumtext", { name: "FileName" })
  fileName: string;

  @Column("varchar", { name: "FileExtension", length: 8 })
  fileExtension: string;

  @Column("varchar", { name: "Revision", length: 5 })
  revision: string;

  @Column("int", { name: "ChangeNumber" })
  changeNumber: number;

  @Column("tinyint", { name: "Status" })
  status: number;

  @Column("mediumtext", { name: "DocumentSummary", nullable: true })
  documentSummary: string | null;

  @Column("blob", { name: "Document", nullable: true })
  document: Buffer | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Productdocument,
    (productdocument) => productdocument.document
  )
  productdocuments: Productdocument[];
}
