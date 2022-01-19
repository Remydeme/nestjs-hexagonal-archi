import { v4 } from 'uuid';

export interface IdentifierGenerator {
  generate(): string;
}

export class UuidGenerator implements IdentifierGenerator {
  generate(): string {
    return v4();
  }
}

export const uuidGenerator = new UuidGenerator();
