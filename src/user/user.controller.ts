import { Controller, Get, Param, Patch, Post, Delete, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { Request } from "express";

@Controller("/user")
export class UserController{

    constructor( private userService: UserService ){}

    @Get()
    getUsers(){
        return this.userService.get();
    }

    @Get('/:userId')
    getUser(@Param() params: {userId: number}){
        return this.userService.getUser(params);
    }

    @Post('/:userId')
    store(@Req() req: Request){
        return this.userService.create(req);
    }

    @Patch('/:userId')
    update(@Req() req: Request, @Param() params: {userId : number}){
        return this.userService.update(req, params);
    }

    @Delete('/:userId')
    delete(@Param() params: {userId : number}){
        return this.userService.delete(params);
    }


}