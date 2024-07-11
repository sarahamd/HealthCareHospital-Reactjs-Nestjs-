import mongoose from "mongoose";

export let clientsSchema=new mongoose.Schema({

    name:String,
    id:String,
    email:String,
    password:String,
    phone:String,
    gender:String,
    isClient: Boolean,
    isDoctor: Boolean,
    isAdmin:Boolean,
    booking:[],
})