export interface DateGenerator {
  now(): string;
}

export class DomainDateGenerator implements DateGenerator {
  now(): string {
    return Date().toString();
  }
}

export const dateGenerator = new DomainDateGenerator();
