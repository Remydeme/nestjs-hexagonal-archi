import { Test, TestingModule } from '@nestjs/testing';
import { CreateShiftUseCase } from '../../../usecase/create-new-shift/create-shift-use-case.service';
import { CreateShiftController } from './create-shift.controller';
import { ShiftDto } from './entities/shift-dto';
import { ShopManagementGatewaysModule } from '../../gateways/shop-management-gateways.module';
import { ShiftManagementUseCaseModule } from '../../../usecase/shift-management-use-case.module';

describe('Unit test | Controller | add new shift', () => {
  let addNewShiftController: CreateShiftController;
  let addNewShiftUseCase: CreateShiftUseCase;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      imports: [ShopManagementGatewaysModule, ShiftManagementUseCaseModule],
      controllers: [CreateShiftController],
    }).compile();

    addNewShiftUseCase =
      testingModule.get<CreateShiftUseCase>(CreateShiftUseCase);
    addNewShiftController = testingModule.get<CreateShiftController>(
      CreateShiftController,
    );
  });

  describe('add a new product to the shop catalogue', () => {
    it('should insert a new product into the catalogue', async () => {
      //Given
      jest.spyOn(addNewShiftUseCase, 'handle').mockImplementation();

      const productInput: ShiftDto = {
        name: 'shift for CHU Robert julien',
      };

      //When
      await addNewShiftController.createShift(productInput);

      //Then
      expect(addNewShiftUseCase.handle).toHaveBeenCalledWith({
        name: 'shift for CHU Robert julien',
      });
      expect(addNewShiftUseCase.handle).toHaveBeenCalledTimes(1);
    });
  });
});
