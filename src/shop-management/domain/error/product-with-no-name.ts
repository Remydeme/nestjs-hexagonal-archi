import { BadRequest } from '../../../shared/domain/error/bad-request';

export class ProductWithNoName extends BadRequest {
  constructor() {
    super('product should have a name');
  }
}
