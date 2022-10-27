import { Injectable } from '@nestjs/common';
import { User } from '../../utils/types';

@Injectable()
export class UsersService {
  private fakeUser = [
    { id: 1, username: 'ThanhTuan', email: 'tuan.khuat@corize.co.jp' },
    { id: 2, username: 'Tuan Khuat', email: 'tuan.khuat@corize.co.jp' },
    { id: 3, username: 'Khanh Ngoc', email: 'tuan.khuat@corize.co.jp' },
    { id: 4, username: 'Tran Ngoc', email: 'tuan.khuat@corize.co.jp' },
  ];
  fetchUsers() {
    return this.fakeUser;
  }

  createUser(user: User) {
    console.log(this.fakeUser.push(user));
  }

  fetchUserById(id: number) {
    return this.fakeUser.filter((item) => item.id === id).length > 0
      ? this.fakeUser.filter((item) => item.id === id)
      : null;
  }
}
