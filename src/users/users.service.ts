import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // fake data
  private users = [
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

  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
    updatedAt: Date.now().toString()

    }
    this.users.push(newUser)

    return this.findAllUsers()
  }

  findAllUsers() {
    return this.users;
  }

  findOneUser(id: string) {
    const user = this.users.find((user) => user.id == id);

    if (!user) {
      throw new Error('no user found :(');
    }

    return user;
  }

  getUserByRole(role?: string) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  removeUser(id: number) {
    return `This action removes a #${id} user`;
  }
}
