import { Module } from '@nestjs/common';
import { InMemoryProductRepository } from './product-repository/in-memory-product-repository';

@Module({
  providers: [
    { provide: 'ShopRepository', useClass: InMemoryProductRepository },
  ],
  exports: [{ provide: 'ShopRepository', useClass: InMemoryProductRepository }],
})
export class ShopManagementGatewaysModule {}
