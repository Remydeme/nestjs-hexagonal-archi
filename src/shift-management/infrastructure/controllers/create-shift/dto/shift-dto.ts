import { IsNotEmpty, IsString } from 'class-validator';

export class ShiftDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
