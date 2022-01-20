import { ShiftApplicantsStats } from '../entities/shift-acceptance-stats';

export interface ShiftRepository {
  addNewShift(product): Promise<void>;
  getShiftAcceptanceStats(shiftId: number): Promise<ShiftApplicantsStats>;
}
