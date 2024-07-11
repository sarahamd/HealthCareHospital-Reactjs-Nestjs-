import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { LoginDto } from './dto/login.dto';
import { regDto } from './dto/register.dto';
import { Roles } from './roles.decorator';
import { Role } from './role.enum';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post("register")
  reg(@Body() regDto: regDto) {
    return this.clientsService.reg(regDto);
  }
  @Post("login")
  log(@Body() LoginDto: LoginDto,@Res({ passthrough: true }) res) {
    return this.clientsService.log(LoginDto,res);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: any) {
    return this.clientsService.update(+id, updateClientDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }

}
