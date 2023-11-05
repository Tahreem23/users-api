import { Controller, Get, Param, Patch, Post, Delete, Req, Body, ParseIntPipe  } from "@nestjs/common";
import { UserService } from "./user.service";
import { Request } from "express";
import { UpdateUserDTO } from "./update-user.dto";

@Controller("/user")
export class UserController{

    constructor( private userService: UserService ){}

    @Get()
    getUsers(){
        return this.userService.get();
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) params: {userId: number}){
        return this.userService.getUser(params);
    }

    @Post('/:userId')
    store(@Req() req: Request){
        return this.userService.create(req);
    }

   
    @Patch("/:userId")
    update(@Body() userUpdateDTO : UpdateUserDTO,
    @Param('userId', ParseIntPipe) params: {userId: number}
    ){
        return this.userService.update(userUpdateDTO, params);
    }

    @Delete('/:userId')
    delete(@Param('userId', ParseIntPipe) params: {userId : number}){
        return this.userService.delete(params);
    }


}