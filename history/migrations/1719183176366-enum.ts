import { MigrationInterface, QueryRunner } from 'typeorm';

export class Enum1719183176366 implements MigrationInterface {
  name = 'Enum1719183176366';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS "history"."events_id_seq" OWNED BY "history"."events"."id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "history"."events" ALTER COLUMN "id" SET DEFAULT nextval('"history"."events_id_seq"')`,
    );
    await queryRunner.query(
      `ALTER TABLE "history"."events" DROP COLUMN "restMethod"`,
    );
    await queryRunner.query(
      `CREATE TYPE "history"."events_restmethod_enum" AS ENUM('POST', 'PUT')`,
    );
    await queryRunner.query(
      `ALTER TABLE "history"."events" ADD "restMethod" "history"."events_restmethod_enum" NOT NULL DEFAULT 'POST'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "history"."events" DROP COLUMN "restMethod"`,
    );
    await queryRunner.query(`DROP TYPE "history"."events_restmethod_enum"`);
    await queryRunner.query(
      `ALTER TABLE "history"."events" ADD "restMethod" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "history"."events" ALTER COLUMN "id" DROP DEFAULT`,
    );
    await queryRunner.query(`DROP SEQUENCE "history"."events_id_seq"`);
  }
}
