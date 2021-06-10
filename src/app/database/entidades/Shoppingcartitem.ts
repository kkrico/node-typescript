import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";

@Index("my_fk_64", ["productId"], {})
@Entity("shoppingcartitem", { schema: "adventureworks" })
export class Shoppingcartitem {
  @PrimaryGeneratedColumn({ type: "int", name: "ShoppingCartItemID" })
  shoppingCartItemId: number;

  @Column("varchar", { name: "ShoppingCartID", length: 50 })
  shoppingCartId: string;

  @Column("int", { name: "Quantity", default: () => "'1'" })
  quantity: number;

  @Column("int", { name: "ProductID" })
  productId: number;

  @Column("timestamp", {
    name: "DateCreated",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateCreated: Date;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.shoppingcartitems, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;
}
