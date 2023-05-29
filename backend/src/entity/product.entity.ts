import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { productDto } from 'src/api/product/dto/product.model';

@Table({ tableName: 'product' })
export class ProductTable extends Model<productDto> {
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id_product: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  category: string;


  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  value: number;
}
