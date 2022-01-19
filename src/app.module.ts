import { Module } from '@nestjs/common';
import { ShopManagementControllersModule } from './shift-management/infrastructure/controllers/shop-management-controllers.module';

@Module({
  imports: [ShopManagementControllersModule],
})
export class AppModule {}
