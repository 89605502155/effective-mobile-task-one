import { MigrationInterface, QueryRunner } from "typeorm";

export class Events1719180578599 implements MigrationInterface {
    name = 'Events1719180578599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "history"."events" ("id" integer NOT NULL, "restMethod" character varying NOT NULL, "userId" integer NOT NULL, "time" date NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "history"."events"`);
    }

}
