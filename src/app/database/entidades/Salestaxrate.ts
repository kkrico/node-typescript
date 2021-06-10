import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("salestaxrate", { schema: "adventureworks" })
export class Salestaxrate {
  @PrimaryGeneratedColumn({ type: "int", name: "SalesTaxRateID" })
  salesTaxRateId: number;

  @Column("int", { name: "StateProvinceID" })
  stateProvinceId: number;

  @Column("tinyint", { name: "TaxType" })
  taxType: number;

  @Column("double", { name: "TaxRate", precision: 22 })
  taxRate: number;

  @Column("varchar", { name: "Name", length: 50 })
  name: string;

  @Column("varbinary", { name: "rowguid", length: 16 })
  rowguid: Buffer;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;
}
