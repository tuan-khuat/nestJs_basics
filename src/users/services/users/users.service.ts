import { Injectable } from '@nestjs/common';
import { User } from '../../utils/types';

@Injectable()
export class UsersService {
  private fakeUser = [
    { id: 1, username: 'ThanhTuan', email: 'tuan.khuat@corize.co.jp', age: 20 },
    {
      id: 2,
      username: 'Tuan Khuat 1',
      email: 'tuan.khuat@corize.co.jp',
      age: 21,
    },
    {
      id: 3,
      username: 'Khanh Ngoc 3',
      email: 'tuan.khuat@corize.co.jp',
      age: 19,
    },
    { id: 4, username: 'Tran Ngoc', email: 'tuan.khuat@corize.co.jp', age: 23 },
  ];

  fetchUsers() {
    return this.fakeUser;
  }

  sortUsers() {
    const sortedUser = this.fakeUser.sort((a, b) => a.age - b.age);
    return sortedUser;
  }

  createUser(user: User) {
    return this.fakeUser.push(user);
  }

  fetchUserById(id: number) {
    return this.fakeUser.filter((item) => item.id === id).length > 0
      ? this.fakeUser.filter((item) => item.id === id)
      : null;
  }
}
