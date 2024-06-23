import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
}
