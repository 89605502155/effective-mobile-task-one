import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UserCreate1719140549935 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
