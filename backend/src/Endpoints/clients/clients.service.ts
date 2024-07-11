import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { regDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class ClientsService {
  constructor(
     @InjectModel ('clients') private clientsmodel ,
     private jwtservice:JwtService
    
    ){}

     
  async reg(regDto: regDto) {
    let foundUser= await this.clientsmodel.findOne({
      email:regDto.email
    })
    let allusers= await this.clientsmodel.find({})
    if(foundUser)
      return {
      message:
        'Your email is already exist please login ',
    };
    let lastuserid=allusers[allusers.length-1]?.id||0
    let salt= await bcrypt.genSalt(10)
    let hashpass= await bcrypt.hash(regDto.password,salt)
    regDto.password=hashpass
    regDto.id=+lastuserid+1;
    let newuser=new this.clientsmodel(regDto);
    await newuser.save()

    return {
      message: 'Created successfully ',
      data: newuser,
    }; 
  
  }
  async log(LoginDto: LoginDto,res: Response) {
   let user= await this.clientsmodel.findOne({email:LoginDto.email})
   if(!user) return {message:"Invalid Email Or Password !"}
    let checkpass=await bcrypt.compare(LoginDto.password,user.password)
    if(!checkpass) return { message: "Invalid Email Or Password !" };
   let myjwt= await this.jwtservice.sign({
    user
   })
// res.header("x",myjwt)
// console.log(myjwt);

   return { message: 'Logged-In Successfully', JWT: myjwt };
    }

  findAll() {
    return this.clientsmodel.find({}) ;
  }

  findOne(id: number) {
    return this.clientsmodel.find({id}) ;
  }

  async update(id: number, updateClientDto:any) {
    let updateuser =await this.clientsmodel.updateOne({id},
      {$set: updateClientDto} ,
    )       
    let user= await this.clientsmodel.find({id})
  return{ Message:'updated successfully ' ,updateuser:updateuser ,user:user}
  }


 async remove(id: number) {
     let deleteuser= await this.clientsmodel.deleteOne({id}) ;
     return{ message:'deleted successfully ' ,deleteuser }
    }

}
