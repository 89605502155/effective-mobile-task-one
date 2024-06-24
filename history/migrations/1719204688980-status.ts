import { MigrationInterface, QueryRunner } from "typeorm";

export class Status1719204688980 implements MigrationInterface {
    name = 'Status1719204688980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "history"."events" ADD "status" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "history"."events" DROP COLUMN "status"`);
    }

}
