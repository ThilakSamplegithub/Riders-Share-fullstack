const { Router } = require("express");
const driverRouter = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {driverBlackListingModel}=require("../Models/blackListing.driverModel")
const { driverModel } = require("../Models/driver.model");
// const { validatePassword } = require("../validation");
const {driverAuthMiddleware}=require("../Middlewares/driver.auth.middleware");
const { passengerModel } = require("../Models/passenger.model");
driverRouter.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phoneNumber,
      carLicensePlate,
      carModel,
      location,
    } = req.body;
    // if (!validatePassword(password)) {
    //   return res.status(200).send({ msg: "Not strong password" });
    // }
    bcrypt.hash(password, 5, async (err, hashed) => {
      try {
        if (err) {
          res.status(400).send({ err });
        } else {
          console.log(hashed);
          const driver = await driverModel.create({
            name,
            email,
            password: hashed,
            phoneNumber,
            carLicensePlate,
            carModel,
            location
          });
          console.log(driver);
          return res.status(200).json({ msg: driver });
        }
      } catch (err) {
        res.send({ err: err.message });
      }
    });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});
driverRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const driver = await driverModel.findOne({ email });
    if (driver) {
      console.log(driver);
      bcrypt.compare(password, driver.password, (err, result) => {
        if (err) {
          res.status(200).send({ msg: "wrong password" });
        } else {
          console.log(result);
          const token = jwt.sign(
            { userId: driver._id, user: driver.name,location:driver.location},
            "masai",
            { expiresIn: "7d" }
          );
          return res.status(200).json({ msg: "Logged in successfully", token,id:String(driver._id) });
        }
      });
    } else {
      res.status(200).send({ msg: "User doesn't exist" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
// To get all passengers requesting to that location which I want by default when I login to drivers page
driverRouter.get('/locations/:id',driverAuthMiddleware,async(req,res)=>{
try{
const {id}=req.params
console.log(id)
if(id===req.userId){
  const driver=await driverModel.findOne({_id:id})
  const location=driver.location
  const allPassengers=await passengerModel.find({location})
  return res.status(201).json({passengers:allPassengers})
}else{
  res.status(201).send('please login again')
}
}catch(err){
  res.status(402).send({err:err.message})
}
})
  driverRouter.patch('/confirmed/:id',driverAuthMiddleware,async(req,res)=>{
      try{
        const {id}=req.params
       const passenger= await passengerModel.updateOne({_id:id},{$set:{driverId:req.userId,status:true}})
       return res.status(200).json({passenger,msg:"updated status and driverId successfully"})
      }catch(err){
        res.status(400).send({msg:`Something went wrong,Not confirmed`})
      }
  })
  //logout
  driverRouter.get("/logout",async(req,res)=>{
    try{
      const token=req.headers.authorization
      if(token){
       const driverToken_blackListing= await driverBlackListingModel.create({token})
       console.log(driverToken_blackListing)
       return res.status(200).json({msg:"logged-out successfully",token})
      }
    }catch(err){
      res.status(400).send({msg:err.message})
    }
  })
  
module.exports = { driverRouter };
