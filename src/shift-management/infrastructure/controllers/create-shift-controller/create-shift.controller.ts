import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateShiftUseCase } from '../../../usecase/create-new-shift/create-shift-use-case.service';
import { ShiftDto } from './entities/shift-dto';

import { CreateShiftCommand } from '../../../usecase/create-new-shift/create-shift-command';
import { BadRequest } from '../../../../shared/domain/error/bad-request';

@Controller()
export class CreateShiftController {
  constructor(private service: CreateShiftUseCase) {}

  @Post('/shifts')
  async createShift(@Body() productInput: ShiftDto) {
    const command: CreateShiftCommand = new CreateShiftCommand(
      productInput.name,
    );

    try {
      await this.service.handle(command);
    } catch (error) {
      if (error instanceof BadRequest) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: error.message,
          },
          HttpStatus.FORBIDDEN,
        );
      }
    }
  }
}
