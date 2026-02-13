


import { query } from "../database/db.js";

//insert user


export const insertUser = async (name, email,password,profile_url) => {
  const Email = email.trim().toLowerCase();
  const Name = name.trim().toLowerCase();

  const sql = `
    INSERT INTO users (name, email,password,profile_url)
    VALUES ($1, $2,$3,$4)
    RETURNING *
    `;
   try{
    const { rows } = await query(sql, [Name, Email,password,profile_url]);
     return rows[0];
    }
     catch(err){
    if(err.code==='23505'){
     throw new Error("Username or Email already exists");
  }
    throw err; 
};}


// fetch users
export const fetchUsers = async () => {
  const { rows } = await query(
    "SELECT * FROM users ORDER BY id DESC"
  );
  return rows;
};



//fetchUserbyId
export const fetchUserById = async (id)=>{
  try{
    const {rows} = await query ("SELECT * FROM users WHERE id = $1",[id])
    return rows[0]

  }catch(error){
    console.error(error);
    
  }
}


// deleting user by Id
export const deleteUserBy = async (id) => {
  const { rows } = await query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );
  
  return rows[0]; 
};



//User login

export const fetchUserByEmail = async (email)=>{
  const Email=email.trim().toLowerCase()
  try{
    const {rows} = await query ("SELECT * FROM users WHERE email = $1",[Email])
    return rows[0]

  }catch(error){
    console.log(error);
    
  }
}  

//update User

export const putUser = async(id,name,email,password,profile_url)=>{
  const Name = name.trim().toLowerCase()
  const Email = email.trim().toLowerCase()

  try{
    const sql = " UPDATE users SET name=$1,email=$2,password=$3,profile_url=$4  where id=$5  RETURNING*"

    const {rows}= await query (sql,[Name,Email,password,profile_url,id])
    return rows[0]
  }catch(error){
    console.log(error);
    
  }
}