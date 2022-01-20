import { Inject, Injectable } from '@nestjs/common';
import type { ShiftRepository } from '../../domain/ports/shift-repository';
import { ShiftApplicantsStats } from '../../domain/entities/shift-acceptance-stats';

@Injectable()
export class GetShiftApplicantsStatsUseCase {
  constructor(
    @Inject('ShiftRepository') private shiftRepository: ShiftRepository,
  ) {}
  execute(shiftId: number): Promise<ShiftApplicantsStats> {
    return this.shiftRepository.getShiftAcceptanceStats(shiftId);
  }
}
