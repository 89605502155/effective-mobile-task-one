import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { Method } from '@lib/entity/event';

export class CreateEventDto {
  @IsEnum(Method)
  @IsNotEmpty()
  restMethod: Method;
  @IsInt()
  @IsNotEmpty()
  userId: number;
  time?: Date;
}
