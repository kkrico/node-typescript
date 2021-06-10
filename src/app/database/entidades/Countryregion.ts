import { Column, Entity, OneToMany } from "typeorm";
import { Salesterritory } from "./Salesterritory";
import { Stateprovince } from "./Stateprovince";

@Entity("countryregion", { schema: "adventureworks" })
export class Countryregion {
  @Column("varchar", { primary: true, name: "CountryRegionCode", length: 3 })
  countryRegionCode: string;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Salesterritory,
    (salesterritory) => salesterritory.countryRegionCode2
  )
  salesterritories: Salesterritory[];

  @OneToMany(
    () => Stateprovince,
    (stateprovince) => stateprovince.countryRegionCode2
  )
  stateprovinces: Stateprovince[];
}
