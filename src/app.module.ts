import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database.module';
import { UserModel } from '../models/user.model';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserModel }]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
