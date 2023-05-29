import { ProductTable } from 'src/entity/product.entity';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: ProductTable,
  },
];
