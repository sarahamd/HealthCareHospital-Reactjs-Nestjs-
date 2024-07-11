import {
    IsArray,
    IsBoolean,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Length,
    MinLength,
  } from 'class-validator';

export class CreateDoctorDto {
    @IsOptional()
    public id?: number;
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    public name: string;

 @IsNotEmpty()
    @IsString()
    public department: string;

    @IsOptional()
    @IsString()
    public rate?: string;
    @IsNotEmpty()
    @IsString()
    public price: string;
    @IsNotEmpty()
    @IsBoolean()
    public isAdmin: boolean;
    @IsNotEmpty()
    @IsBoolean()
    public isdoctor: boolean;
    @IsNotEmpty()
    @IsBoolean()
    public isclient: boolean;
    @IsNotEmpty()
    @IsString()
    public image: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    public email: string;
    @IsNotEmpty()
    @IsString()
    public password: string;
    @IsArray()
    @IsNotEmpty()
    public  available_hour:[];
    @IsArray()
    @IsNotEmpty()
    public  available_date:[];
    @IsNotEmpty()
    @IsBoolean()
    public firstduration: boolean;
    @IsNotEmpty()
    @IsBoolean()
    public secondduration: boolean;

}



// {
//     "id": 5,
//     "name": "Dr. Richard Patel",
//     "department": "Oncology",
//     "rate":"4",
//     "price": "$190",
//     "isAdmin":false,
//     "image": "https://bit.ly/49SEJiL",  
//     "email": "jennifer.patel@example.com",
//     "password": "password6",
//     "available_date": ["Monday", "Tuesday", "Wednesday", "Thursday"],
//     "available_hour": ["12:00 PM" , "1:00 PM"],
//     "firstduration":false,
//     "secondduration":false,
//     "isClient": false,
//     "isDoctor": true
//   }