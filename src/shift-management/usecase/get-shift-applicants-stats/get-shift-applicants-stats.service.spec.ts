import { ShiftRepository } from '../../domain/ports/shift-repository';
import { ShiftApplicantsStats } from '../../domain/entities/shift-acceptance-stats';
import { Test, TestingModule } from '@nestjs/testing';
import { ShopManagementGatewaysModule } from '../../infrastructure/gateways/shop-management-gateways.module';
import { CreateShiftUseCase } from '../create-new-shift/create-shift-use-case.service';
import { GetShiftApplicantsStatsUseCase } from './get-shift-applicants-stats.service';

describe('Unit test | Use case | load shift stats', () => {
  let shiftRepository: ShiftRepository;

  beforeAll(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      imports: [ShopManagementGatewaysModule],
      providers: [CreateShiftUseCase],
    }).compile();
    shiftRepository = testingModule.get<ShiftRepository>('ShiftRepository');
  });

  describe('load shift stats', () => {
    it('should return stats about applicants', async () => {
      //Given
      const shiftId = 12;
      const shiftApplicantsStats = ShiftApplicantsStats.create(12, 8, 0.4);
      jest
        .spyOn(shiftRepository, 'getShiftAcceptanceStats')
        .mockResolvedValueOnce(shiftApplicantsStats);

      const loadShiftApplicantsStatsUseCase =
        new GetShiftApplicantsStatsUseCase(shiftRepository);

      //When
      const shiftApplicantsStatsResponse =
        await loadShiftApplicantsStatsUseCase.execute(shiftId);

      //Then
      expect(shiftApplicantsStatsResponse).toEqual({
        statusDeclined: 12,
        statusAccepted: 8,
        percentageOfAcceptance: 0.4,
      });

      expect(shiftRepository.getShiftAcceptanceStats).toHaveBeenCalledWith(
        shiftId,
      );
      expect(shiftRepository.getShiftAcceptanceStats).toHaveBeenCalledTimes(1);
    });
  });
});
