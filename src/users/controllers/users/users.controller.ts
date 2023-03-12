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
  UseGuards,
} from '@nestjs/common';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user.pipe';
import { AuthGuard } from 'src/users/guards/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.fetchUsers();
  }

  @Get('sort')
  getUserSortBy(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    const sortedUser = this.userService.sortUsers();
    return sortedUser;
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData.age.toPrecision());
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
