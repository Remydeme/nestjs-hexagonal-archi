import { Inject, Injectable } from '@nestjs/common';
import type { ShiftRepository } from '../../domain/ports/shift-repository';
import { CreateShiftInput } from './create-shift-input';
import { Shift } from '../../domain/entities/shift';

@Injectable()
export class CreateShiftUseCase {
  constructor(
    @Inject('ShiftRepository') private shiftRepository: ShiftRepository,
  ) {}

  async execute(command: CreateShiftInput): Promise<void> {
    const shift = Shift.create(command.name);
    await this.shiftRepository.addNewShift(shift);
  }
}
