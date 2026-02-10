
import { insertUser,fetchUsers, fetchUserById, deleteUserById, fetchUserByEmail} from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

// insert user
export const createUser = async (req,res)=>{
    try{
       const { name, email,password } = req.body;
   
    if (!name || !email ||!password){
     return    res.status(400).json("insert name and email and password")
    }

    // For password hashing
    const hashPass = await bcrypt.hash(password,10)
        const User = await insertUser(name,email,hashPass)
         res.status(200).json(User)
     } 
     catch (err) {
       if (err.message === "Username or Email already exists") {
      return res.status(409).json(
        "username or Email address is already in use."
      );
    }
     console.error("User Insertion Error", err);   
     res.status(500).json(err);
}

}

// get all users
export const getUsers = async(req,res)=>{
try{
    const Users = await fetchUsers();
    res.status(200).json(Users)

}catch(err){
    
    res.status(500).json({ error: err.message });

}
}

// get User by id
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id
    const user = await fetchUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
  console.error("user by id error", err);
  res.status(500).json(err);
}

};

//delete user by id
export const deleteUser= async (req, res) => {
  try {
    const id = req.params.id;
    
    const deleteUser = await deleteUserById(id);
    if (!deleteUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      message: "User deleted successfully",
      user: deleteUser
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

  //user login
export const UserLogin =async(req,res)=>{
  const{email,password}=req.body;
  try{
    const user = await fetchUserByEmail(email)
    if(!user ){
      return res.status(401).json({message:"user not found "})
    }
    
    // Password comparison
    const isValid = await bcrypt.compare(password,user.password)
    if(!isValid){
      return res.status(401).json({message:"incorrect credentials"})
      
    }
//   Acces token creation
    const accesToken=jwt.sign({id:user.id,
      email:user.email},
      process.env.JWT_SECRET,
      {expiresIn:"1d"})
   return res.status(200).json({message:"Login succesfull",accesToken});

  }
  catch(err){
    console.error("Login error", err);
    return res.status(500).json({message:"Error occured"})
    
  }
}