import { query } from "../database/db.js";

export const insertUser = async (name, email,password) => {
  const Email = email.trim().toLowerCase();
  const Name = name.trim().toLowerCase();

  const sql = `
    INSERT INTO users (name, email,password)
    VALUES ($1, $2,$3)
    RETURNING *
    `;
   try{
    const { rows } = await query(sql, [Name, Email,password]);
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


//fetching user by Id
export const fetchUserById = async (id) => {
  const { rows } = await query(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );
  return rows[0];
};

//fetching user by email
export const fetchUserByEmail = async (email) => {
  const { rows } = await query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return rows[0];
};


// deleting user by Id
export const deleteUserById = async (id) => {
  const { rows } = await query(
    "DELETE  FROM users WHERE id = $1 RETURNING *",
    [id]
  );
  return rows[0];
};