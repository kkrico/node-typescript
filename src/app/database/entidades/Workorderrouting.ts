import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Workorder } from "./Workorder";
import { Product } from "./Product";
import { Location } from "./Location";

@Index("my_fk_82", ["productId"], {})
@Index("my_fk_83", ["locationId"], {})
@Entity("workorderrouting", { schema: "adventureworks" })
export class Workorderrouting {
  @Column("int", { primary: true, name: "WorkOrderID" })
  workOrderId: number;

  @Column("int", { primary: true, name: "ProductID" })
  productId: number;

  @Column("smallint", { primary: true, name: "OperationSequence" })
  operationSequence: number;

  @Column("smallint", { name: "LocationID" })
  locationId: number;

  @Column("datetime", { name: "ScheduledStartDate" })
  scheduledStartDate: Date;

  @Column("datetime", { name: "ScheduledEndDate" })
  scheduledEndDate: Date;

  @Column("datetime", { name: "ActualStartDate", nullable: true })
  actualStartDate: Date | null;

  @Column("datetime", { name: "ActualEndDate", nullable: true })
  actualEndDate: Date | null;

  @Column("decimal", {
    name: "ActualResourceHrs",
    nullable: true,
    precision: 9,
    scale: 4,
  })
  actualResourceHrs: string | null;

  @Column("double", { name: "PlannedCost", precision: 22 })
  plannedCost: number;

  @Column("double", { name: "ActualCost", nullable: true, precision: 22 })
  actualCost: number | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Workorder, (workorder) => workorder.workorderroutings, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "WorkOrderID", referencedColumnName: "workOrderId" }])
  workOrder: Workorder;

  @ManyToOne(() => Product, (product) => product.workorderroutings, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;

  @ManyToOne(() => Location, (location) => location.workorderroutings, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "LocationID", referencedColumnName: "locationId" }])
  location: Location;
}
