import { User } from './../../libs/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UserService {
  private addres: string =
    'http://' +
    process.env.DATABASE_HOST +
    ':' +
    process.env.HISTORY_PORT +
    '/events/add';
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private httpClient: HttpService,
  ) {}
  onHistory(addres: string, method: string, usId: number, status: boolean) {
    this.httpClient.axiosRef.post(addres, {
      restMethod: method,
      userId: usId,
      status: status,
    });
  }
  async create(createUserDto: CreateUserDto) {
    let success = false;
    let res: User;
    try {
      const user = this.usersRepository.create(createUserDto);
      res = await this.usersRepository.save(user);
    } catch (e) {
      this.onHistory(this.addres, 'POST', -1, false);
      success = true;
      return e;
    } finally {
      if (success === false) {
        this.onHistory(this.addres, 'POST', res.id, true);
        return res;
      }
    }
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findId(findUserDto: CreateUserDto) {
    const val = await this.usersRepository.findOneBy(findUserDto);
    return val.id;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let success = false;
    let res: UpdateResult;
    const user: User = await this.usersRepository.findOneBy({ id: id });
    for (const [key, value] of Object.entries(updateUserDto)) {
      user[key] = value;
    }
    try {
      res = await this.usersRepository.update(id, user);
    } catch (e) {
      success = true;
      this.onHistory(this.addres, 'PUT', id, false);
      return e;
    } finally {
      if (success === false) {
        this.onHistory(this.addres, 'PUT', id, true);
        return res;
      }
    }
    return res;
  }
}
