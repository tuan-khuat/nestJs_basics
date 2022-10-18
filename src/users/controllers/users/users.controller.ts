import { CreateUserDto } from './../../dtos/CreateUser.dto';
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Console } from 'console';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Tuan', email: 'tuan.khuat@corize.co.jp' };
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData.email);
    return [];
  }
}
