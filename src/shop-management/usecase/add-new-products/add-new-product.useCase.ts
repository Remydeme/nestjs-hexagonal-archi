import { Inject, Injectable } from '@nestjs/common';
import { ProductsRepository } from '../../domain/ports/products-repository';
import { AddNewProductCommand } from './add-new-product-command';
import { Product } from '../../domain/entities/product';

@Injectable()
export class AddNewProductsUseCase {
  constructor(
    @Inject('ShopRepository') private shopRepository: ProductsRepository,
  ) {}

  async handle(command: AddNewProductCommand): Promise<void> {
    const product = Product.create(command.name, command.price, command.weight);
    await this.shopRepository.addNewProducts(product);
  }
}
