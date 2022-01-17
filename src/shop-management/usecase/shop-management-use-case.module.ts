import { Module } from '@nestjs/common';
import { AddNewProductsUseCase } from './add-new-products/add-new-product.useCase';
import { InMemoryProductRepository } from '../infrastructure/gateways/product-repository/in-memory-product-repository';
import { ShopManagementGatewaysModule } from '../infrastructure/gateways/shop-management-gateways.module';

@Module({
  imports: [ShopManagementGatewaysModule],
  providers: [AddNewProductsUseCase],
  exports: [AddNewProductsUseCase],
})
export class ShopManagementUseCaseModule {}
