"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const dotenv_1 = require("dotenv");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const typeorm_1 = require("typeorm");
const index_1 = require("/home/ferubkomsu/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443 1/effectiveMobile/task1/users/libs/entities/index");
(0, dotenv_1.config)({ path: (0, path_1.join)(process.cwd(), '..', '.env') });
const configService = new config_1.ConfigService();
const getPassword = () => {
    const password = configService.get('POSTGRES_PASSWORD');
    if (!password) {
        throw new Error('POSTGRES_PASSWORD is not defined in the environment variables');
    }
    return password;
};
const options = () => {
    const host = configService.get('DATABASE_HOST');
    const port = parseInt(configService.get('PG_PORT'));
    const username = configService.get('POSTGRES_USERNAME');
    const db = configService.get('DB_NAME');
    const password = getPassword;
    return {
        type: 'postgres',
        host: host,
        port: port,
        username: username,
        password: password,
        database: db,
        schema: 'people',
        synchronize: false,
        dropSchema: false,
        logging: true,
        entities: index_1.USER,
        migrations: [(0, path_1.join)(process.cwd(), 'migrations', '*.js')],
        migrationsRun: true,
        migrationsTableName: 'people_migrations',
    };
};
exports.dataSource = new typeorm_1.DataSource(options());
//# sourceMappingURL=typeorm.config.js.map