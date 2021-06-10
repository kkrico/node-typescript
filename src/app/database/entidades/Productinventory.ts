import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";
import { Location } from "./Location";

@Index("my_fk_28", ["locationId"], {})
@Entity("productinventory", { schema: "adventureworks" })
export class Productinventory {
  @Column("int", { primary: true, name: "ProductID" })
  productId: number;

  @Column("smallint", { primary: true, name: "LocationID" })
  locationId: number;

  @Column("varchar", { name: "Shelf", length: 10 })
  shelf: string;

  @Column("tinyint", { name: "Bin" })
  bin: number;

  @Column("smallint", { name: "Quantity" })
  quantity: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.productinventories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;

  @ManyToOne(() => Location, (location) => location.productinventories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "LocationID", referencedColumnName: "locationId" }])
  location: Location;
}
