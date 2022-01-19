import { Module } from '@nestjs/common';
import { CreateShiftUseCase } from './create-new-shift/create-shift-use-case.service';
import { InMemoryShiftRepository } from '../infrastructure/gateways/product-repository/in-memory-shift-repository.service';
import { ShopManagementGatewaysModule } from '../infrastructure/gateways/shop-management-gateways.module';

@Module({
  imports: [ShopManagementGatewaysModule],
  providers: [CreateShiftUseCase],
  exports: [CreateShiftUseCase],
})
export class ShiftManagementUseCaseModule {}
