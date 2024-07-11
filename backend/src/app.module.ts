import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './Endpoints/doctors/doctors.module';
import { ClientsModule } from './Endpoints/clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './Endpoints/clients/roles.guard';

@Module({
  imports: [DoctorsModule,
    ClientsModule,
   JwtModule.register( {secret: 'project',
   signOptions: { expiresIn: '300d' },
 }),
  MongooseModule.forRoot(
    'mongodb://localhost:27017/hospital'
  ),
  
  ],
  controllers: [AppController],
  providers: [AppService,{ provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule {}
