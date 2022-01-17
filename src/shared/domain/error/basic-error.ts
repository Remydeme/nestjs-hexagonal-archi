export class BasicError {
  message: string;
  code: string;

  constructor(message: string, code: string) {
    this.code = code;
    this.message = message;
  }
}
