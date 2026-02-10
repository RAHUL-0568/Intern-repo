import { createUser,getUsers,getUserById,deleteUser,UserLogin } from "../controllers/user.controllers.js";
import { verifyToken } from "../../../study/Backend/middleware/verifytoken.js";
 

import express from "express"

const router = express.Router();

router.post("/users",verifyToken,createUser)
router.get("/users",verifyToken,getUsers)
router.get("/users/:id",getUserById)
router.delete("/users/:id",deleteUser)
router.post("/Login",UserLogin)

export default router;