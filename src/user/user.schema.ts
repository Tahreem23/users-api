import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({required: true})
    name: string;

    @Prop({reqiured: true})
    email: string;

    @Prop()
    country: string;

    @Prop()
    age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);