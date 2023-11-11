import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDTO } from './update-user.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Connection, Model } from 'mongoose';
import { CreateUserDTO } from './create-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel : Model<User>          
  ){}

  get() {
    return { name: 'Uchechukwu Azubuko', country: 'Nigeria' };
  }
  getUser(param: { userId: number }) {
    return param;
  }

  async create (createUserDTO: CreateUserDTO) : Promise<User> {
    const createUser = new this.userModel(createUserDTO);
    return createUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // create(req: Request) {
  //   return req.body;
  // }

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