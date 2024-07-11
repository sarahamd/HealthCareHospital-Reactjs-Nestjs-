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
  
  export class regDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    public name: string;
    @IsNotEmpty()
    @IsString()
    public gender: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    public email: string;
    @IsNotEmpty()
    @IsString()
    public password: string;
    @IsNotEmpty()
    @IsString()
    public phone: string;
    @IsNotEmpty()
    @IsBoolean()
    public isAdmin: boolean;
    @IsNotEmpty()
    @IsBoolean()
    public isdoctor: boolean;
    @IsNotEmpty()
    @IsBoolean()
    public isclient: boolean;
    @IsArray()
    @IsNotEmpty()
    public  booking:[];
    @IsOptional()
    public id?: number;
  
  }
  