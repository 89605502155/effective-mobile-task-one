import { IsInt, IsString, Length, Min } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Length(2, 20)
  name?: string;
  @IsString()
  @Length(2, 20)
  surname?: string;
  @IsInt()
  @Min(10)
  age?: number;
}
