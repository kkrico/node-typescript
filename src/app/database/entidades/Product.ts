import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Billofmaterials } from "./Billofmaterials";
import { Productmodel } from "./Productmodel";
import { Productcosthistory } from "./Productcosthistory";
import { Productdocument } from "./Productdocument";
import { Productinventory } from "./Productinventory";
import { Productlistpricehistory } from "./Productlistpricehistory";
import { Productproductphoto } from "./Productproductphoto";
import { Productreview } from "./Productreview";
import { Productvendor } from "./Productvendor";
import { Purchaseorderdetail } from "./Purchaseorderdetail";
import { Salesorderdetail } from "./Salesorderdetail";
import { Shoppingcartitem } from "./Shoppingcartitem";
import { Specialofferproduct } from "./Specialofferproduct";
import { Transactionhistory } from "./Transactionhistory";
import { Transactionhistoryarchive } from "./Transactionhistoryarchive";
import { Workorder } from "./Workorder";
import { Workorderrouting } from "./Workorderrouting";

@Index("my_fk_22", ["productSubcategoryId"], {})
@Index("my_fk_23", ["productModelId"], {})
@Entity("product", { schema: "adventureworks" })
export class Product {
  @PrimaryGeneratedColumn({ type: "int", name: "ProductID" })
  productId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("varchar", { name: "ProductNumber", length: 25 })
  productNumber: string;

  @Column("bit", { name: "MakeFlag" })
  makeFlag: boolean;

  @Column("bit", { name: "FinishedGoodsFlag" })
  finishedGoodsFlag: boolean;

  @Column("varchar", { name: "Color", nullable: true, length: 15 })
  color: string | null;

  @Column("smallint", { name: "SafetyStockLevel" })
  safetyStockLevel: number;

  @Column("smallint", { name: "ReorderPoint" })
  reorderPoint: number;

  @Column("double", { name: "StandardCost", precision: 22 })
  standardCost: number;

  @Column("double", { name: "ListPrice", precision: 22 })
  listPrice: number;

  @Column("varchar", { name: "Size", nullable: true, length: 5 })
  size: string | null;

  @Column("varchar", { name: "SizeUnitMeasureCode", nullable: true, length: 3 })
  sizeUnitMeasureCode: string | null;

  @Column("varchar", {
    name: "WeightUnitMeasureCode",
    nullable: true,
    length: 3,
  })
  weightUnitMeasureCode: string | null;

  @Column("decimal", { name: "Weight", nullable: true, precision: 8, scale: 2 })
  weight: string | null;

  @Column("int", { name: "DaysToManufacture" })
  daysToManufacture: number;

  @Column("varchar", { name: "ProductLine", nullable: true, length: 2 })
  productLine: string | null;

  @Column("varchar", { name: "Class", nullable: true, length: 2 })
  class: string | null;

  @Column("varchar", { name: "Style", nullable: true, length: 2 })
  style: string | null;

  @Column("int", { name: "ProductSubcategoryID", nullable: true })
  productSubcategoryId: number | null;

  @Column("int", { name: "ProductModelID", nullable: true })
  productModelId: number | null;

  @Column("datetime", { name: "SellStartDate" })
  sellStartDate: Date;

  @Column("datetime", { name: "SellEndDate", nullable: true })
  sellEndDate: Date | null;

  @Column("datetime", { name: "DiscontinuedDate", nullable: true })
  discontinuedDate: Date | null;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Billofmaterials,
    (billofmaterials) => billofmaterials.productAssembly
  )
  billofmaterials: Billofmaterials[];

  @OneToMany(
    () => Billofmaterials,
    (billofmaterials) => billofmaterials.component
  )
  billofmaterials2: Billofmaterials[];

  @ManyToOne(() => Productmodel, (productmodel) => productmodel.products, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "ProductModelID", referencedColumnName: "productModelId" },
  ])
  productModel: Productmodel;

  @OneToMany(
    () => Productcosthistory,
    (productcosthistory) => productcosthistory.product
  )
  productcosthistories: Productcosthistory[];

  @OneToMany(
    () => Productdocument,
    (productdocument) => productdocument.product
  )
  productdocuments: Productdocument[];

  @OneToMany(
    () => Productinventory,
    (productinventory) => productinventory.product
  )
  productinventories: Productinventory[];

  @OneToMany(
    () => Productlistpricehistory,
    (productlistpricehistory) => productlistpricehistory.product
  )
  productlistpricehistories: Productlistpricehistory[];

  @OneToMany(
    () => Productproductphoto,
    (productproductphoto) => productproductphoto.product
  )
  productproductphotos: Productproductphoto[];

  @OneToMany(() => Productreview, (productreview) => productreview.product)
  productreviews: Productreview[];

  @OneToMany(() => Productvendor, (productvendor) => productvendor.product)
  productvendors: Productvendor[];

  @OneToMany(
    () => Purchaseorderdetail,
    (purchaseorderdetail) => purchaseorderdetail.product
  )
  purchaseorderdetails: Purchaseorderdetail[];

  @OneToMany(
    () => Salesorderdetail,
    (salesorderdetail) => salesorderdetail.product
  )
  salesorderdetails: Salesorderdetail[];

  @OneToMany(
    () => Shoppingcartitem,
    (shoppingcartitem) => shoppingcartitem.product
  )
  shoppingcartitems: Shoppingcartitem[];

  @OneToMany(
    () => Specialofferproduct,
    (specialofferproduct) => specialofferproduct.product
  )
  specialofferproducts: Specialofferproduct[];

  @OneToMany(
    () => Transactionhistory,
    (transactionhistory) => transactionhistory.product
  )
  transactionhistories: Transactionhistory[];

  @OneToMany(
    () => Transactionhistoryarchive,
    (transactionhistoryarchive) => transactionhistoryarchive.product
  )
  transactionhistoryarchives: Transactionhistoryarchive[];

  @OneToMany(() => Workorder, (workorder) => workorder.product)
  workorders: Workorder[];

  @OneToMany(
    () => Workorderrouting,
    (workorderrouting) => workorderrouting.product
  )
  workorderroutings: Workorderrouting[];
}
