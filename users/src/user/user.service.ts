import { User } from './../../libs/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private httpClient: HttpService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let success = false;
    let res: User;
    const addres: string = 'http://localhost:3001/events/add';
    try {
      const user = this.usersRepository.create(createUserDto);
      res = await this.usersRepository.save(user);
    } catch (e) {
      this.httpClient.axiosRef.post(addres, {
        restMethod: 'POST',
        userId: -1,
        status: false,
      });
      success = true;
      return e;
    } finally {
      if (success === false) {
        // const useId = res.then((data) => {
        //   data.raw[0].id;
        // });
        console.log(res);
        this.httpClient.axiosRef.post(addres, {
          restMethod: 'POST',
          userId: res.id,
        });
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
    const user: User = await this.usersRepository.findOneBy({ id: id });
    for (const [key, value] of Object.entries(updateUserDto)) {
      user[key] = value;
    }

    return await this.usersRepository.update(id, user);
  }
}
