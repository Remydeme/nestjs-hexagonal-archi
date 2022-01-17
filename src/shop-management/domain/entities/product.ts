import { ProductWithNoName } from '../error/product-with-no-name';
import { ProductWeightInvalid } from '../error/product-weight-invalid';

export class Product {
  name: string;
  price: number;
  weight: number;

  private constructor(name: string, price: number, weight: number) {
    this.name = name;
    this.price = price;
    this.weight = weight;
  }

  static create(name: string, price: number, weight: number) {
    if (name.length === 0) throw new ProductWithNoName();
    if (weight <= 0) throw new ProductWeightInvalid();
    return new Product(name, price, weight);
  }
}
