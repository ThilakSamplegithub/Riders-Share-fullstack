const mongoose=require("mongoose")
const driverSchema=mongoose.Schema({
    token:{type:String,required:true}
},{versionKey:false})
const driverBlackListingModel=mongoose.model("driver_Blacklisting",driverSchema)
module.exports={driverBlackListingModel}