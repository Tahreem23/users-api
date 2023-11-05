import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDTO } from './update-user.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Uchechukwu Azubuko', country: 'Nigeria' };
  }
  getUser(param: { userId: number }) {
    return param;
  }
  create(req: Request) {
    return req.body;
  }
  update(
    updateUserDto: UpdateUserDTO,
    param: { userId: number },
  ) {
    return { body: updateUserDto, param };
  }
  delete(param: { userId: number }) {
    return param;
  }
}