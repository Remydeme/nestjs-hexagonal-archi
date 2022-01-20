import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateShiftUseCase } from '../../../usecase/create-new-shift/create-shift-use-case.service';
import { ShiftDto } from './dto/shift-dto';

import { CreateShiftInput } from '../../../usecase/create-new-shift/create-shift-input';
import { BadRequest } from '../../../../shared/domain/error/bad-request';

@Controller('shifts')
export class CreateShiftController {
  constructor(private service: CreateShiftUseCase) {}

  @Post('')
  async createShift(@Body() productInput: ShiftDto) {
    const command: CreateShiftInput = new CreateShiftInput(productInput.name);

    try {
      await this.service.execute(command);
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
