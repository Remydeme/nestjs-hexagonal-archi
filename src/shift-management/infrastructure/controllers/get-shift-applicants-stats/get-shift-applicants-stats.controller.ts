import { Controller, Get, Param } from '@nestjs/common';
import { ShiftRepository } from '../../../domain/ports/shift-repository';
import { GetShiftApplicantsStatsUseCase } from '../../../usecase/get-shift-applicants-stats/get-shift-applicants-stats.service';

@Controller('shifts')
class GetShiftApplicantsStatsController {
  constructor(
    private getShiftApplicantsStatsUseCase: GetShiftApplicantsStatsUseCase,
  ) {}

  @Get('/:shiftId/stats')
  getShiftApplicantsStats(
    @Param(':shiftId') shiftId: number,
  ): Promise<GetShiftApplicantsStatsDto> {
    return this.getShiftApplicantsStatsUseCase.execute(shiftId);
  }
}
