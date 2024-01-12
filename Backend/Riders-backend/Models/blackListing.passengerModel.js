const mongoose=require("mongoose")
const passengerSchema=mongoose.Schema({
    token:{type:String,required:true}
},{versionKey:false})
const passengerBlackListingModel=mongoose.model("passenger_Blacklisting",passengerSchema)
module.exports={passengerBlackListingModel}