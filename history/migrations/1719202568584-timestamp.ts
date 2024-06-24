import { MigrationInterface, QueryRunner } from "typeorm";

export class Timestamp1719202568584 implements MigrationInterface {
    name = 'Timestamp1719202568584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "history"."events" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "history"."events" ADD "time" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "history"."events" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "history"."events" ADD "time" date NOT NULL`);
    }

}
