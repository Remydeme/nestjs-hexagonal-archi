import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  Min,
} from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  weight: number;

  @IsNotEmptyObject()
  @IsNotEmpty()
  @IsDecimal()
  price: number;
}
