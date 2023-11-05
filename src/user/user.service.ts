import { Injectable } from '@nestjs/common';
import { Request } from 'express';

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
  update(req: Request, param: { userId: number }) {
    return { body: req.body, param };
  }
  delete(param: { userId: number }) {
    return param;
  }
}