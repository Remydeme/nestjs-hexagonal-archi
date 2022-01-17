import { Test, TestingModule } from '@nestjs/testing';
import { AddNewProductsUseCase } from '../../../usecase/add-new-products/add-new-product.useCase';
import { AddNewProductsController } from './add-new-product.controller';
import { ProductDto } from './entities/product-dto';
import { ShopManagementGatewaysModule } from '../../gateways/shop-management-gateways.module';
import { ShopManagementUseCaseModule } from '../../../usecase/shop-management-use-case.module';

describe('Unit test | Controller | add new product', () => {
  let addNewProductController: AddNewProductsController;
  let addNewProductUseCase: AddNewProductsUseCase;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      imports: [ShopManagementGatewaysModule, ShopManagementUseCaseModule],
      controllers: [AddNewProductsController],
    }).compile();

    addNewProductUseCase = testingModule.get<AddNewProductsUseCase>(
      AddNewProductsUseCase,
    );
    addNewProductController = testingModule.get<AddNewProductsController>(
      AddNewProductsController,
    );
  });

  describe('add a new product to the shop catalogue', () => {
    it('should insert a new product into the catalogue', async () => {
      //Given
      jest.spyOn(addNewProductUseCase, 'handle').mockImplementation();

      const productInput: ProductDto = {
        price: 12,
        name: 'tomate',
        weight: 10,
      };

      //When
      await addNewProductController.addNewProducts(productInput);

      //Then
      expect(addNewProductUseCase.handle).toHaveBeenCalledWith({
        name: 'tomate',
        price: 12,
        weight: 10,
      });
      expect(addNewProductUseCase.handle).toHaveBeenCalledTimes(1);
    });
  });
});
