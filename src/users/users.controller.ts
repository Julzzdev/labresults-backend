import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Session,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get('/colors/:color')
  setColor(@Param('color') color: string, @Session() session: any) {
    session.color = color;
  }

  @Get('colors')
  getColot(@Session() session: any) {
    return session.color;
  }

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.signup(body.username, body.password);
  }

  @Post('/signin')
  signin(@Body() body: CreateUserDto) {
    return this.authService.signin(body.username, body.password);
  }

  @Get('/users')
  getUsers() {
    return this.usersService.findAll();
  }

  @Get('/users/:_id')
  getUser(@Param() _id: string) {
    return this.usersService.findOne(_id);
  }

  @Patch('/users/:_id')
  updateUser(@Param() _id: string, @Body() body: Partial<User>) {
    this.usersService.update(_id, body);
  }

  @Delete('/users/:_id')
  deleteUser(@Param() _id: string) {
    this.usersService.remove(_id);
  }
}
