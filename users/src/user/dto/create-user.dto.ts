import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 20)
  @IsNotEmpty()
  name: string;
  @IsString()
  @Length(2, 20)
  @IsNotEmpty()
  surname: string;
  @IsInt()
  @Min(10)
  @IsNotEmpty()
  age: number;
}
