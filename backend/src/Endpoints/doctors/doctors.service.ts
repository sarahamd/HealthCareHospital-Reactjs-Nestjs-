import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DoctorsService {
  constructor(
@InjectModel('doctors')private doctormodel
  ){}
   async create(createDoctorDto: CreateDoctorDto) {
    let newdoctor= await this.doctormodel(createDoctorDto)
    let alldoctors= await this.doctormodel.find({})
    let lastdoctorid=alldoctors[alldoctors.length-1].id
    newdoctor.id=+lastdoctorid+1
     await newdoctor.save()
    return {Message:'added sucessfully',data:newdoctor};
  }

  findAll() {
    return this.doctormodel.find({});
  }

   async findOne(id: number) {
    return  await this.doctormodel.find({id}) ;
  }


  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    let updatedoctors= await this.doctormodel.findOneAndUpdate({id},
      updateDoctorDto 
  )
    return  {
      Message: 'Updated',
       updatedoctors,
      doctor: await this.doctormodel.find({ id}),
    };;
  }

  async remove(id: number) {
 
    let deldoctor=await this.doctormodel.deleteOne({id})
    return { message: 'doctor Deleted', deldoctor };
  }
}
