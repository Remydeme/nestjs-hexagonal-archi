import { Module } from '@nestjs/common';
import { ShopManagementUseCaseModule } from '../../usecase/shop-management-use-case.module';
import { AddNewProductsController } from './add-new-products-controller/add-new-product.controller';

@Module({
  imports: [ShopManagementUseCaseModule],
  controllers: [AddNewProductsController],
})
export class ShopManagementControllersModule {}
