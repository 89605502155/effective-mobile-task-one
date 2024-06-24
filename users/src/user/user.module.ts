import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@lib/entities';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './../../.env',
    }),
    TypeOrmModule.forFeature([User]),
    HttpModule.register({
      baseURL: join(
        'http://',
        process.env.DATABASE_HOST,
        ':',
        process.env.HISTORY_PORT,
      ),
      maxRedirects: 5,
      timeout: 5000,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
