import { Inject, Injectable } from '@nestjs/common';
import { ShiftRepository } from '../../domain/ports/shift-repository';
import { CreateShiftCommand } from './create-shift-command';
import { Shift } from '../../domain/entities/shift';

@Injectable()
export class CreateShiftUseCase {
  constructor(
    @Inject('ShiftRepository') private shiftRepository: ShiftRepository,
  ) {}

  async handle(command: CreateShiftCommand): Promise<void> {
    const shift = Shift.create(command.name);
    await this.shiftRepository.addNewShift(shift);
  }
}
