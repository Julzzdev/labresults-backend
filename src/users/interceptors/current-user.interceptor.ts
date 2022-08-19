import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}

  async intercept(context: ExecutionContext, next: CallHandler<any>) {
    const request = context.switchToHttp().getRequest();
    const { currentUser } = request.session || {};
    if (currentUser) {
      const userSigned = await this.usersService.findOne(currentUser._id);
      request.session.currentUser = userSigned;
    }

    return next.handle();
  }
}
