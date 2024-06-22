import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

config({
  path: '../../../../../.env',
});
const configService = new ConfigService();

export const userDataSourse: TypeOrmModuleOptions = {
  host: configService.get('DATABASE_HOST'),
  type: 'postgres',
  port: parseInt(configService.get('PG_PORT')),
  username: configService.get('POSTGRES_USERNAME'),
  password: configService.get('POSTGRES_PASSWORD'),
  schema: 'users',
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: [],
  migrations: [join(process.cwd(), 'migrations', '**', '*migration.ts')],
  migrationsRun: true,
  migrationsTableName: 'user_migrations',
};
