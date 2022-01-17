import { ProductsRepository } from '../../../domain/ports/products-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryProductRepository implements ProductsRepository {
  cache = [];

  addNewProducts(product): Promise<void> {
    this.cache.push(product);
    return;
  }
}
