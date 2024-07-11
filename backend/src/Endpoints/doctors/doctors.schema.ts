import mongoose from "mongoose";

export let doctorSchema= new mongoose.Schema({
    id:Number,
    name:String,
    department:String,
    rate:String,
    price:String,
    image:String,
    email:String,
    password:String,
    available_date:[],
    available_hour:[],
    isClient: Boolean,
    isDoctor: Boolean,
    isAdmin:Boolean
})




// {
//     "id": 5,
//     "name": "Dr. Richard Patel",
//     "department": "Oncology",
//     "rate":"4",
//     "price": "$190",
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