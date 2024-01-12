const jwt=require("jsonwebtoken")
const {passengerBlackListingModel}=require("../Models/blackListing.passengerModel")
const authMiddleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization
        if(token){
           const arr= await passengerBlackListingModel.find()
           console.log(arr)
         const booleanArray=  arr.map(el=>el.token===token?false:true)
         console.log(booleanArray)
           if(booleanArray.includes(false)){
            res.status(200).send({msg:"please Login"})
           }else{
            jwt.verify(token,"masai",(err,decoded)=>{
                if(err){
                    res.status(200).send(`You are not authorized`)
                }else{
                    console.log(decoded)
                    req.userId=decoded.userId
                    req.user=decoded.user
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
    module.exports={authMiddleware}
    