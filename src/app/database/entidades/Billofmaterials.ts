import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";

@Index("my_fk_1", ["productAssemblyId"], {})
@Index("my_fk_2", ["componentId"], {})
@Entity("billofmaterials", { schema: "adventureworks" })
export class Billofmaterials {
  @PrimaryGeneratedColumn({ type: "int", name: "BillOfMaterialsID" })
  billOfMaterialsId: number;

  @Column("int", { name: "ProductAssemblyID", nullable: true })
  productAssemblyId: number | null;

  @Column("int", { name: "ComponentID" })
  componentId: number;

  @Column("datetime", { name: "StartDate" })
  startDate: Date;

  @Column("datetime", { name: "EndDate", nullable: true })
  endDate: Date | null;

  @Column("varchar", { name: "UnitMeasureCode", length: 3 })
  unitMeasureCode: string;

  @Column("smallint", { name: "BOMLevel" })
  bomLevel: number;

  @Column("decimal", { name: "PerAssemblyQty", precision: 8, scale: 2 })
  perAssemblyQty: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.billofmaterials, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "ProductAssemblyID", referencedColumnName: "productId" },
  ])
  productAssembly: Product;

  @ManyToOne(() => Product, (product) => product.billofmaterials2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ComponentID", referencedColumnName: "productId" }])
  component: Product;
}
