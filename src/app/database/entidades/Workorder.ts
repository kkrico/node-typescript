import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import { Scrapreason } from "./Scrapreason";
import { Workorderrouting } from "./Workorderrouting";

@Index("my_fk_79", ["productId"], {})
@Index("my_fk_80", ["scrapReasonId"], {})
@Entity("workorder", { schema: "adventureworks" })
export class Workorder {
  @PrimaryGeneratedColumn({ type: "int", name: "WorkOrderID" })
  workOrderId: number;

  @Column("int", { name: "ProductID" })
  productId: number;

  @Column("int", { name: "OrderQty" })
  orderQty: number;

  @Column("int", { name: "StockedQty" })
  stockedQty: number;

  @Column("smallint", { name: "ScrappedQty" })
  scrappedQty: number;

  @Column("datetime", { name: "StartDate" })
  startDate: Date;

  @Column("datetime", { name: "EndDate", nullable: true })
  endDate: Date | null;

  @Column("datetime", { name: "DueDate" })
  dueDate: Date;

  @Column("smallint", { name: "ScrapReasonID", nullable: true })
  scrapReasonId: number | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.workorders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;

  @ManyToOne(() => Scrapreason, (scrapreason) => scrapreason.workorders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "ScrapReasonID", referencedColumnName: "scrapReasonId" },
  ])
  scrapReason: Scrapreason;

  @OneToMany(
    () => Workorderrouting,
    (workorderrouting) => workorderrouting.workOrder
  )
  workorderroutings: Workorderrouting[];
}
