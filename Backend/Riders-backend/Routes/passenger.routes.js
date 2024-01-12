const { Router } = require("express");
const {passengerBlackListingModel}=require("../Models/blackListing.passengerModel")
const bcrypt = require("bcrypt");
const { passengerModel } = require("../Models/passenger.model");
const { authMiddleware } = require("../Middlewares/auth.middleware");
const jwt = require("jsonwebtoken");
const upload = require("../Middlewares/multer.middleware");
const passengerRouter = Router();
const {validatePassword}=require("../validation");
const { driverAuthMiddleware } = require("../Middlewares/driver.auth.middleware");
const { driverModel } = require("../Models/driver.model");
passengerRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password, gender, phoneNumber, profilePicture,location } =
      req.body;
    if (!validatePassword(password)) {
      return res.status(200).send("Not a strong Password");
    }
    bcrypt.hash(password, 6, async (err, hashed) => {
      try {
        if (err) {
          res.status(201).send(`please register again`);
        } else {
          console.log(hashed);
          const passenger = await passengerModel.create({
            name,
            email,
            password: hashed,
            gender,
            phoneNumber,
            profilePicture,
            location
          });
          return res.status(201).json({ passenger });
        }
      } catch (err) {
        res.status(400).send(err.message);
      }
    });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});
passengerRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await passengerModel.findOne({ email });
    console.log(user);
    if (email) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(200).send({ msg: "Wrong Password" });
        } else {
          console.log(result);
          const token = jwt.sign(
            { userId: user._id, user: user.name },
            "masai"
          );
          return res.status(200).json({ msg: `logged-in successfully`, token,id:user._id });
        }
      });
    }
  } catch (err) {
    res.status(401).send({ msg: err.message });
  }
});
// This end point is to upload image
passengerRouter.patch(
  "/update/profile/:id",
  authMiddleware,
  upload.single("profilePicture"),
  async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const user = await passengerModel.findOne({ _id: id });
      console.log(user);
      if (!user) {
        res.status(200).send({ msg: "user doesn't exist" });
      } else {
        if (String(user._id) === req.userId) {
          console.log(req);
          if (!req.file) {
            return res.status(400).json({ message: "No file provided" });
          }

          const profilePicturePath = req.file.path; // Store this path in the database or use it as needed
          const profile = await passengerModel.updateOne(
            { _id: id },
            { $set: { profilePicture: profilePicturePath } }
          );
          console.log(profile);
          return res
            .status(200)
            .json({ msg: `${req.user} uploaded successfully` });
        } else {
          res.status(200).send({ msg: "You are not authorized" });
        }
      }
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  }
);

//passenger makes request 
passengerRouter.patch("/update/request/:id",authMiddleware,async(req,res)=>{
  try{
      // const {id}=req.params
      const{id}=req.params
      console.log(id)
      const{location}=req.body
      if(req.userId===id){
        const passenger=await passengerModel.findOne({_id:id})
        if(passenger){
           const updatedRequest=await passengerModel.updateOne({_id:req.userId},{$set:{location,request:true}})
           console.log(updatedRequest)
           const nearBydrivers=await driverModel.find({location})
           return res.status(200).json({msg:"Request sent",id:req.userId,pickup:location,nearBydrivers})
        }
      }else{
        return res.status(201).json({msg:`please login again`})
      }
  }catch(err){
     res.status(400).send({msg:err.message})
  }
})
//To get all nearby drivers in my location when I made request
passengerRouter.get("/:id",authMiddleware,async(req,res)=>{
  try{
    const {id}=req.params
    console.log(id)
    console.log(req.userId,'is id of passenger')
    if(id===req.userId){
      const passenger=await passengerModel.findOne({_id:req.userId})
      const nearBydrivers=await driverModel.find({location:passenger.location})
      return res.status(201).json({passenger,nearBydrivers})
    }else{
      return res.status(202).json({msg:"Please login again"})
    }
  }catch(err){
    res.status(400).send({err:err.message})
  }
})
//After dropping in location again default request and status for next ride.
passengerRouter.patch('/default/:id',authMiddleware,async(req,res)=>{
  try{
     const {id}=req.params
     const {status,request,driverId}=req.body
     console.log(req.body)
     if(id===req.userId){
      const defaultField=await passengerModel.updateOne({_id:id},{$set:req.body})
      const passenger=await passengerModel.findOne({_id:id})
      console.log(passenger)
      res.status(200).send({msg:`Defaulted all fields`,passenger})
     }else{
      res.status(400).send({msg:`Please login again`})
     }
  }catch(err){
    res.status(401).send({err:err.message})
  }
})
  // logout
  passengerRouter.get("/logout",async(req,res)=>{
    try{
      const token=req.headers.authorization
      if(token){
       const passengerToken_blackListing= await passengerBlackListingModel.create({token})
       console.log(passengerToken_blackListing)
       return res.status(200).json({msg:"logged-out successfully",token})
      }
    }catch(err){
      res.status(400).send({msg:err.message})
    }
  })
module.exports = { passengerRouter };
