import { Module } from '@nestjs/common';
import { OrmService } from './orm.service';
import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  providers: [OrmService],
  exports: [OrmService],
  imports: [TypeormModule],
})
export class OrmModule {}
