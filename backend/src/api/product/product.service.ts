import { Inject, Injectable } from '@nestjs/common';
import { ProductTable } from 'src/entity/product.entity';
import { productDto } from './dto/product.model';
import { Op } from 'sequelize';
import deleteImg from 'src/helpers/functions/deleteImg';

@Injectable()
export class productService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: typeof ProductTable,
  ) {}

  async create(product: productDto): Promise<productDto> {
    const res=  await this.productRepository.create<ProductTable>({
      image: product.image,
      description: product.description,
      name: product.name,
      value: product.value,
      category: product.category
    });
    return res
  }

  async edit(edit: productDto): Promise<any> {
    const res = await this.productRepository.update<ProductTable>(
      { ...edit },
      { where: { id_product: edit.id_product }}
    );
    return res;
  }

  async delete(delet: number): Promise<number> {
    if (!delet) throw Error;
    
    const imgDelet = await this.productRepository.findOne({where: {id_product : delet}})
    await deleteImg(imgDelet.image)
    return await this.productRepository.destroy<ProductTable>({
      where: { id_product: delet },
    });
  }

  async findAll({page, limit, name}:any): Promise<any> {
  
    const offset = page * limit
    const filters = {};

    if (name && name !== 'undefined') {
      filters[Op.or] = [
        { name: { [Op.like]: `%${name}%` } },
        { category: { [Op.like]: `%${name}%` } },
      ];
    }
    const res = await this.productRepository.findAndCountAll<ProductTable>({
      where:{ ...filters},
      limit: Number(limit),
      offset: Number(offset),
      order: [['createdAt', 'DESC']]
    })
    
    return res
  }

  async findOneById(id: number): Promise<productDto> {
    return await this.productRepository.findOne<ProductTable>({
      where: { id_product: id },
    });
  }
}
