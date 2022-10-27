import { CreateUserDto } from './../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  ParseBoolPipe,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.fetchUsers();
  }

  @Get()
  getUserSortBy(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    return { username: 'Tuan', email: 'tuan.khuat@corize.co.jp' };
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return this.userService.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    console.log(user);
    if (!user)
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    return user;
  }
}
