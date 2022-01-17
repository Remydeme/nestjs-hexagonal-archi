import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AddNewProductsUseCase } from '../../../usecase/add-new-products/add-new-product.useCase';
import { ProductDto } from './entities/product-dto';

import { AddNewProductCommand } from '../../../usecase/add-new-products/add-new-product-command';
import { BadRequest } from '../../../../shared/domain/error/bad-request';

@Controller()
export class AddNewProductsController {
  constructor(private service: AddNewProductsUseCase) {}

  @Post('/products')
  async addNewProducts(@Body() productInput: ProductDto) {
    const command: AddNewProductCommand = new AddNewProductCommand(
      productInput.name,
      productInput.price,
      productInput.weight,
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
