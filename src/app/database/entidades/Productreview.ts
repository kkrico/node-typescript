import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";

@Index("my_fk_37", ["productId"], {})
@Entity("productreview", { schema: "adventureworks" })
export class Productreview {
  @PrimaryGeneratedColumn({ type: "int", name: "ProductReviewID" })
  productReviewId: number;

  @Column("int", { name: "ProductID" })
  productId: number;

  @Column("varchar", { name: "ReviewerName", nullable: true, length: 50 })
  reviewerName: string | null;

  @Column("timestamp", {
    name: "ReviewDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  reviewDate: Date;

  @Column("varchar", { name: "EmailAddress", nullable: true, length: 50 })
  emailAddress: string | null;

  @Column("int", { name: "Rating" })
  rating: number;

  @Column("mediumtext", { name: "Comments", nullable: true })
  comments: string | null;

  @Column("timestamp", {
    name: "ModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedDate: Date;

  @ManyToOne(() => Product, (product) => product.productreviews, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ProductID", referencedColumnName: "productId" }])
  product: Product;
}
