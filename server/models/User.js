const mongoose=require('mongoose');
const validator=require('email-validator')
const guild=require('discord.js')


const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,   
        required:true,
        unique:true,
        validate:[function(){
            return validator.validate(this.Email);
        },"Invalid Email"]
    },
    PhoneNumber:{
        type:Number,
        unique:true,
        required:true,
    },
    RollNumber:{
        type:Number,
        unique:true,
        required:true,
        unique:[true,"Roll Number must be unique"]
    },
    Branch:{
        type:String,
        required:true,
    },
    Year:{
        type:String,
        required:true,
    },
    Gender: {
        type: String,
        enum:['Male','Female'],
        required: true,
    },
    FoodPref: {
        type: String,
        enum:['Veg','Non-Veg'],
        required: true,
    },
    Events: {
        type: Array,
        required: true,
    },
})





const User = mongoose.model('User', userSchema);

module.exports= User;