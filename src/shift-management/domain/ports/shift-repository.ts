export interface ShiftRepository {
  addNewShift(product): Promise<void>;
}
