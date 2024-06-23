"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events1719180578599 = void 0;
class Events1719180578599 {
    constructor() {
        this.name = 'Events1719180578599';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "history"."events" ("id" integer NOT NULL, "restMethod" character varying NOT NULL, "userId" integer NOT NULL, "time" date NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "history"."events"`);
    }
}
exports.Events1719180578599 = Events1719180578599;
//# sourceMappingURL=1719180578599-events.js.map