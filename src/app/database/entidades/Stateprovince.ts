import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address";
import { Countryregion } from "./Countryregion";
import { Salesterritory } from "./Salesterritory";

@Index("my_fk_66", ["countryRegionCode"], {})
@Index("my_fk_67", ["territoryId"], {})
@Entity("stateprovince", { schema: "adventureworks" })
export class Stateprovince {
  @PrimaryGeneratedColumn({ type: "int", name: "StateProvinceID" })
  stateProvinceId: number;

  @Column("varchar", { name: "StateProvinceCode", length: 3 })
  stateProvinceCode: string;

  @Column("varchar", { name: "CountryRegionCode", length: 3 })
  countryRegionCode: string;

  @Column("bit", { name: "IsOnlyStateProvinceFlag", default: () => "'b'1''" })
  isOnlyStateProvinceFlag: boolean;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("int", { name: "TerritoryID" })
  territoryId: number;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(() => Address, (address) => address.stateProvince)
  addresses: Address[];

  @ManyToOne(
    () => Countryregion,
    (countryregion) => countryregion.stateprovinces,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "CountryRegionCode", referencedColumnName: "countryRegionCode" },
  ])
  countryRegionCode2: Countryregion;

  @ManyToOne(
    () => Salesterritory,
    (salesterritory) => salesterritory.stateprovinces,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "TerritoryID", referencedColumnName: "territoryId" }])
  territory: Salesterritory;
}
