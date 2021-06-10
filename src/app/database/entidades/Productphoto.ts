import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productproductphoto } from "./Productproductphoto";

@Entity("productphoto", { schema: "adventureworks" })
export class Productphoto {
  @PrimaryGeneratedColumn({ type: "int", name: "ProductPhotoID" })
  productPhotoId: number;

  @Column("blob", { name: "ThumbNailPhoto", nullable: true })
  thumbNailPhoto: Buffer | null;

  @Column("varchar", {
    name: "ThumbnailPhotoFileName",
    nullable: true,
    length: 50,
  })
  thumbnailPhotoFileName: string | null;

  @Column("blob", { name: "LargePhoto", nullable: true })
  largePhoto: Buffer | null;

  @Column("varchar", { name: "LargePhotoFileName", nullable: true, length: 50 })
  largePhotoFileName: string | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @OneToMany(
    () => Productproductphoto,
    (productproductphoto) => productproductphoto.productPhoto
  )
  productproductphotos: Productproductphoto[];
}
