import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";
import { Productphoto } from "./Productphoto";

@Index("my_fk_36", ["productPhotoId"], {})
@Entity("productproductphoto", { schema: "adventureworks" })
export class Productproductphoto {
  @Column("int", { primary: true, name: "ProductID" })
  productId: number;

  @Column("int", { primary: true, name: "ProductPhotoID" })
  productPhotoId: number;

  @Column("bit", { name: "Primary" })
  primary: boolean;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.productproductphotos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;

  @ManyToOne(
    () => Productphoto,
    (productphoto) => productphoto.productproductphotos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "ProductPhotoID", referencedColumnName: "productPhotoId" },
  ])
  productPhoto: Productphoto;
}
