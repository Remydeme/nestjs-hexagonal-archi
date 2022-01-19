import { Module } from '@nestjs/common';
import { ShiftManagementUseCaseModule } from '../../usecase/shift-management-use-case.module';
import { CreateShiftController } from './create-shift-controller/create-shift.controller';

@Module({
  imports: [ShiftManagementUseCaseModule],
  controllers: [CreateShiftController],
})
export class ShopManagementControllersModule {}
