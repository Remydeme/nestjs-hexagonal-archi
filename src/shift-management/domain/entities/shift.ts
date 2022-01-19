import { ShiftWithNoName } from '../error/shift-with-no-name';
import { uuidGenerator } from '../../../shared/domain/identifiant-generator/uuid-generator';
import { dateGenerator } from '../../../shared/domain/date-generator/date-generator';

export class Shift {
  id: string;
  name: string;
  creationDate: string;
  updateDate: string;

  private constructor(
    id: string,
    name: string,
    creationDate: string,
    updateDate: string,
  ) {
    this.id = id;
    this.name = name;
    this.creationDate = creationDate;
    this.updateDate = updateDate;
  }

  static create(name: string) {
    if (name.length === 0) throw new ShiftWithNoName();

    const id = uuidGenerator.generate();
    const date = dateGenerator.now();
    return new Shift(id, name, date, date);
  }
}
