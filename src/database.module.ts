// database.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Admin1337:Mortentravel1@boom1337.qwoekdo.mongodb.net/nest-test',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
  ],
})
export class DatabaseModule {}
