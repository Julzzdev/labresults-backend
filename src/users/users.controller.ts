import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Session,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.currentUser = null;
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(body.username, body.password);
    session.currentUser = user;
    return user;
  }

  @Post('/signin')
  async signin(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.username, body.password);
    session.currentUser = user;
    return user;
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
