import { Controller, Delete, Get, HttpCode, Param, Patch, Post, Req } from "@nestjs/common";

@Controller({})
export class AppController{
    
    @Get()
    async findAll() : Promise<any[]> {
        return [];
    }

    @Get()
    getUser(@Param() userId: number){
        return userId;
    }

    @Post()
    store(@Req() req: Request){
        return req.body;
    }

    @Delete('/:userId')
    @HttpCode(204)
    delete(@Param() params: {userId: number}){
        return params.userId;
    }

    @Patch('/:userId')
    update(@Req() req: Request){
        return req.body;
    }

    
}