import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { clientsSchema } from './clients.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    JwtModule.register( {secret: 'project',
    signOptions: { expiresIn: '300d' },
  }),
    MongooseModule.forFeature([{name:'clients',schema:clientsSchema}])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
