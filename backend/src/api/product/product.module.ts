import { productService } from './product.service';
import { productController } from './product.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/helpers/database/database.module';
import { productProviders } from './product.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [productController],
  providers: [productService, ...productProviders],
})
export class productModule {}
