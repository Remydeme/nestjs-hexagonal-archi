export interface DateGenerator {
  now(): string;
}

export class APIDateGenerator implements DateGenerator {
  now(): string {
    return Date().toString();
  }
}

export const dateGenerator = new APIDateGenerator();
