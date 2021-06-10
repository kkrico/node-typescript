import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Salesorderdetail } from "./Salesorderdetail";
import { Product } from "./Product";

@Index("my_fk_65", ["productId"], {})
@Entity("specialofferproduct", { schema: "adventureworks" })
export class Specialofferproduct {
  @Column("int", { primary: true, name: "SpecialOfferID" })
  specialOfferId: number;

  @Column("int", { primary: true, name: "ProductID" })
  productId: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Salesorderdetail,
    (salesorderdetail) => salesorderdetail.specialOffer
  )
  salesorderdetails: Salesorderdetail[];

  @ManyToOne(() => Product, (product) => product.specialofferproducts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;
}
