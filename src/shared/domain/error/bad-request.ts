import { BasicError } from './basic-error';
import { ErrorCode } from './error-code';

export class BadRequest extends BasicError {
  constructor(message: string) {
    super(message, ErrorCode.BAD_REQUEST);
  }
}
