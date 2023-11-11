import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from "./app.contoller";
import { UserModule } from "./user/user.module";


@Module({
    controllers: [AppController, ],
    imports: [
        MongooseModule.forRoot('mongodb+srv://tahreemiqbal23:IbD66pSlnWwEVQSc@cluster0.h4unhcd.mongodb.net/?retryWrites=true&w=majority'),
        UserModule],
})
export class AppModule{

}