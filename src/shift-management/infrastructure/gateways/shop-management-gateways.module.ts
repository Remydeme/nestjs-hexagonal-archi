import { Module } from '@nestjs/common';
import { InMemoryShiftRepository } from './product-repository/in-memory-shift-repository.service';

@Module({
  providers: [
    { provide: 'ShiftRepository', useClass: InMemoryShiftRepository },
  ],
  exports: [{ provide: 'ShiftRepository', useClass: InMemoryShiftRepository }],
})
export class ShopManagementGatewaysModule {}
