import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { dataSource } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSource.options)],
})
export class TypeormModule {}
