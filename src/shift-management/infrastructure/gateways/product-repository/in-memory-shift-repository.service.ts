import { ShiftRepository } from '../../../domain/ports/shift-repository';
import { Injectable } from '@nestjs/common';
import { ShiftApplicantsStats } from '../../../domain/entities/shift-acceptance-stats';

@Injectable()
export class InMemoryShiftRepository implements ShiftRepository {
  cache = [];

  addNewShift(product): Promise<void> {
    this.cache.push(product);
    return;
  }

  getShiftAcceptanceStats(shiftId: number): Promise<ShiftApplicantsStats> {
    return Promise.resolve(ShiftApplicantsStats.create(12, 8, 0.4));
  }
}
