import { Controller, Get, Param, Post, Req } from "@nestjs/common";

@Controller({})
export class AppController{
    
    @Get()
    async findAll() : Promise<any[]> {
        return [];
    }

    @Get('/:userId')
    getUser(@Param() userId: number){
        return userId;
    }

    @Post()
    store(@Req() req: Request){
        return req.body;
    }
}