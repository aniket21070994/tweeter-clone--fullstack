import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config({
    path:"../.env"
})

export const isAuthenticated=async(req,res,next)=>{
try{
  const { token } = req.cookies;
   
  if(!token){
       return res.status(401).json({
        message:"User is not Authorize",
        success:false
       })
  }
  const decode=await jwt.verify(token,process.env.Token_Secrate)
  res.user=decode.id
  console.log(decode)
  next()
} 
catch(err){
console.log(err)
}
}