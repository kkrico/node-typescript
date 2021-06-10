import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";
import { Document } from "./Document";

@Index("my_fk_26", ["documentId"], {})
@Entity("productdocument", { schema: "adventureworks" })
export class Productdocument {
  @Column("int", { primary: true, name: "ProductID" })
  productId: number;

  @Column("int", { primary: true, name: "DocumentID" })
  documentId: number;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.productdocuments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;

  @ManyToOne(() => Document, (document) => document.productdocuments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "DocumentID", referencedColumnName: "documentId" }])
  document: Document;
}
