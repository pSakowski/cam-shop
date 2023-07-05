import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @IsInt()
  @Min(0)
  oldPrice: number;

  @IsNotEmpty()
  @Min(0)
  description: string;

  image: string;

  category: string;
}
