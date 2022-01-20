import { CreateShiftUseCase } from './create-shift-use-case.service';
import { ShiftRepository } from '../../domain/ports/shift-repository';
import { Test, TestingModule } from '@nestjs/testing';
import { Shift } from '../../domain/entities/shift';
import { ShopManagementGatewaysModule } from '../../infrastructure/gateways/shop-management-gateways.module';
import { uuidGenerator } from '../../../shared/domain/identifiant-generator/uuid-generator';
import { v4 } from 'uuid';
import { dateGenerator } from '../../../shared/domain/date-generator/date-generator';

describe('Unit test | Use case | add new shift ', () => {
  let shopRepository: ShiftRepository;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      imports: [ShopManagementGatewaysModule],
      providers: [CreateShiftUseCase],
    }).compile();
    shopRepository = testingModule.get<ShiftRepository>('ShiftRepository');
  });

  describe('add a new shift to the shop catalogue', () => {
    it('it succeed', () => {
      //Given
      const uuid = 'db431106-b773-4e8c-b74a-66af9cb02ef4';
      jest.spyOn(uuidGenerator, 'generate').mockImplementation(() => uuid);

      const date = '2021-03-24T17:00:00.000Z';
      jest.spyOn(dateGenerator, 'now').mockImplementation(() => date);

      jest.spyOn(shopRepository, 'addNewShift').mockResolvedValue();
      const addNewProductUseCase = new CreateShiftUseCase(shopRepository);

      const shift: Shift = Shift.create('shift CHU robert julien');

      //When
      addNewProductUseCase.execute(shift);

      //Then
      expect(shopRepository.addNewShift).toHaveBeenCalledTimes(1);
      expect(shopRepository.addNewShift).toHaveBeenCalledWith({
        id: 'db431106-b773-4e8c-b74a-66af9cb02ef4',
        name: 'shift CHU robert julien',
        creationDate: date,
        updateDate: date,
      });
    });
  });
});
