import { AddNewProductsUseCase } from './add-new-product.useCase';
import { ProductsRepository } from '../../domain/ports/products-repository';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../../app.controller';
import { AppService } from '../../../app.service';
import { InMemoryProductRepository } from '../../infrastructure/gateways/product-repository/in-memory-product-repository';
import { Product } from '../../domain/entities/product';
import { ShopManagementGatewaysModule } from '../../infrastructure/gateways/shop-management-gateways.module';

describe('Unit test | Use case | add new product ', () => {
  let shopRepository: ProductsRepository;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      imports: [ShopManagementGatewaysModule],
      providers: [AddNewProductsUseCase],
    }).compile();
    shopRepository = testingModule.get<ProductsRepository>('ShopRepository');
  });

  describe('add a new product to the shop catalogue', () => {
    it('it succeed', () => {
      //Given
      jest.spyOn(shopRepository, 'addNewProducts').mockResolvedValue();
      const addNewProductUseCase = new AddNewProductsUseCase(shopRepository);
      const tomato: Product = Product.create('tomate', 12, 12);

      //When
      addNewProductUseCase.handle(tomato);

      //Then
      expect(shopRepository.addNewProducts).toHaveBeenCalledTimes(1);
      expect(shopRepository.addNewProducts).toHaveBeenCalledWith({
        name: 'tomate',
        price: 12,
        weight: 12,
      });
    });
  });
});
