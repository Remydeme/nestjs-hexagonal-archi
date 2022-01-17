import { BadRequest } from '../../../shared/domain/error/bad-request';

export class ProductWeightInvalid extends BadRequest {
  constructor() {
    super(
      'we sell physical product, product must have a weight greater than 0g',
    );
  }
}
