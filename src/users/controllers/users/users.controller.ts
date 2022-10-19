import { CreateUserDto } from './../../dtos/CreateUser.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
  Req,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  //   @Get()
  //   getUsers() {
  //     return { username: 'Tuan', email: 'tuan.khuat@corize.co.jp' };
  //   }

  @Get()
  getUserSortBy(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return { username: 'Tuan', email: 'tuan.khuat@corize.co.jp' };
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return [];
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log({ id });
    return { id };
  }
}
