"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreate1719140549935 = void 0;
class UserCreate1719140549935 {
    constructor() {
        this.name = 'UserCreate1719140549935';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "people"."human" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_fa2d597665c4d7604049d5f7792" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "people"."human"`);
    }
}
exports.UserCreate1719140549935 = UserCreate1719140549935;
//# sourceMappingURL=1719140549935-user_create.js.map