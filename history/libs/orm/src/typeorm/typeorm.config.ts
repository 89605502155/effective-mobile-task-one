import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';
import { Event } from '/home/ferubkomsu/Рабочий стол/Создать папку 1/effectiveMobile/task1/history/libs/entity/src/index';

config({ path: join(process.cwd(), '..', '.env') });
const configService = new ConfigService();

const getPassword = (): string => {
  const password = configService.get<string>('POSTGRES_PASSWORD');
  if (!password) {
    throw new Error(
      'POSTGRES_PASSWORD is not defined in the environment variables',
    );
  }
  return password;
};

const options = (): DataSourceOptions => {
  const host = configService.get<string>('DATABASE_HOST');
  const port = parseInt(configService.get<string>('PG_PORT'));
  const username = configService.get<string>('POSTGRES_USERNAME');
  const db = configService.get<string>('DB_NAME');
  const password = getPassword;
  return {
    type: 'postgres',
    host: host,
    port: port,
    username: username,
    password: password,
    database: db,
    schema: 'history',
    synchronize: false,
    dropSchema: false,
    logging: true,
    entities: [Event],
    migrations: [join(process.cwd(), 'migrations', '*.js')],
    migrationsRun: true,
    migrationsTableName: 'history_migrations',
  };
};
export const dataSource = new DataSource(options());
