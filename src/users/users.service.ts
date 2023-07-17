import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const users = [
  {
    _id: '123aze',
    id: 'b',
    lastname: 'Robinson',
    firstname: 'Nick',
    role: 'manager-co',
    _deleted: false,
    updatedAt: '2023-07-17T06:36:35.161Z',
  },

  {
    _id: '64b4e00f575cd882f44f991c',
    id: 'c',
    lastname: 'Qualley',
    firstname: 'Margaret',
    role: 'admin',
    _deleted: false,
    updatedAt: '2023-07-17T06:51:43.161Z',
  },
];

@Injectable()
export class UsersService {
  createUser(createUserDto: CreateUserDto) {
    return 'create a user';
  }

  findAllUsers() {
    return users;
  }

  findOneUser(id: number) {
    return `This action returns a #${id} user`;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  removeUser(id: number) {
    return `This action removes a #${id} user`;
  }
}
