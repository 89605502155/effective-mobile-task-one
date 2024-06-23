import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserCreate1719140549935 implements MigrationInterface {
  name = 'UserCreate1719140549935';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "people"."human" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_fa2d597665c4d7604049d5f7792" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "people"."human"`);
  }
}
