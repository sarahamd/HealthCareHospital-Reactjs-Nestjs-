import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { doctorSchema } from './doctors.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:'doctors',
      schema:doctorSchema
    }]),

  ],
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
