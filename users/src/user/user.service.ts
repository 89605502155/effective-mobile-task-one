import { User } from './../../libs/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.insert(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findId(findUserDto: CreateUserDto) {
    const val = await this.usersRepository.findOneBy(findUserDto);
    return val.id;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user: User = await this.usersRepository.findOneBy({ id: id });
    for (const [key, value] of Object.entries(updateUserDto)) {
      user[key] = value;
    }

    return await this.usersRepository.update(id, user);
  }
}
