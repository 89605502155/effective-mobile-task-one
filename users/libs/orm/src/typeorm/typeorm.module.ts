import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { userDataSourse } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(userDataSourse)],
})
export class TypeormModule {}
