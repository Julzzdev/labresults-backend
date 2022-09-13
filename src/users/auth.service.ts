import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(
    username: string,
    password: string,
    darkMode: boolean,
    isAdmin: boolean,
  ) {
    const userExists = await this.usersService.findByUsername(username);
    if (userExists) {
      throw new BadRequestException('Username already in use');
    }
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    const user = await this.usersService.create(
      username,
      result,
      darkMode,
      isAdmin,
    );
    return user;
  }

  async signin(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Incorrect password');
    }
    const payload = { ...user };
    const token = this.jwtService.sign(payload);

    console.log(payload);

    return token;
  }
}
