import { ShiftRepository } from '../../../domain/ports/shift-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryShiftRepository implements ShiftRepository {
  cache = [];

  addNewShift(product): Promise<void> {
    this.cache.push(product);
    return;
  }
}
