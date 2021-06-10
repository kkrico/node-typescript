import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer";
import { Salesorderheader } from "./Salesorderheader";
import { Salesperson } from "./Salesperson";
import { Countryregion } from "./Countryregion";
import { Salesterritoryhistory } from "./Salesterritoryhistory";
import { Stateprovince } from "./Stateprovince";

@Index("my_fk_62", ["countryRegionCode"], {})
@Entity("salesterritory", { schema: "adventureworks" })
export class Salesterritory {
  @PrimaryGeneratedColumn({ type: "int", name: "TerritoryID" })
  territoryId: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("varchar", { name: "CountryRegionCode", length: 3 })
  countryRegionCode: string;

  @Column("varchar", { name: "Group", length: 50 })
  group: string;

  @Column("double", { name: "SalesYTD", precision: 22 })
  salesYtd: number;

  @Column("double", { name: "SalesLastYear", precision: 22 })
  salesLastYear: number;

  @Column("double", { name: "CostYTD", precision: 22 })
  costYtd: number;

  @Column("double", { name: "CostLastYear", precision: 22 })
  costLastYear: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(() => Customer, (customer) => customer.territory)
  customers: Customer[];

  @OneToMany(
    () => Salesorderheader,
    (salesorderheader) => salesorderheader.territory
  )
  salesorderheaders: Salesorderheader[];

  @OneToMany(() => Salesperson, (salesperson) => salesperson.territory)
  salespeople: Salesperson[];

  @ManyToOne(
    () => Countryregion,
    (countryregion) => countryregion.salesterritories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "CountryRegionCode", referencedColumnName: "countryRegionCode" },
  ])
  countryRegionCode2: Countryregion;

  @OneToMany(
    () => Salesterritoryhistory,
    (salesterritoryhistory) => salesterritoryhistory.territory
  )
  salesterritoryhistories: Salesterritoryhistory[];

  @OneToMany(() => Stateprovince, (stateprovince) => stateprovince.territory)
  stateprovinces: Stateprovince[];
}
