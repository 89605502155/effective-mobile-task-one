import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Events1719180578599 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
