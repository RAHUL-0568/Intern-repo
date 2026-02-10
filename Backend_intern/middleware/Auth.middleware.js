import jwt from "jsonwebtoken"


export const jwtAuthenticate = (req,res,next)=>{
    
    const authHeader = req.headers.authorization

    if (!authHeader||!authHeader.startsWith("Bearer ")){
        return res.status(401).json("invalid token ")
    }


    const token = authHeader.split(" ")[1]

    try{

     const jwtVerify= jwt.verify(token,process.env.JWT_SECRET)

     req.user=jwtVerify
     next()

    }catch(err){
        return res.status(401).json("token expired or Invalid")
        

    }

}