const jwt=require("jsonwebtoken")
const { driverBlackListingModel } = require("../Models/blackListing.driverModel")
const driverAuthMiddleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization
        if(token){
            const arr=await driverBlackListingModel.find()
          const booleanArr=arr.map(el=>el.token===token?false:true)
          console.log(booleanArr)
          if(booleanArr.includes(false)){
            res.status(200).send({msg:"please login again"})
          }else{
            jwt.verify(token,"masai",(err,decoded)=>{
                if(err){
                    res.status(200).send(`You are not authorized`)
                }else{
                    console.log(decoded,"is decoded")
                    req.userId=decoded.userId
                    req.user=decoded.user
                    req.location=decoded.location
                    next()
                }
             })
          }
        }else{
res.status(400).send("No Token")
        }
    }catch(err){
        res.status(400).send({err})
    }
    }
    module.exports={driverAuthMiddleware}
    