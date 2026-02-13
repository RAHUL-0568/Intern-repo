import { createUser,getUsers,getUserById,deleteU,UserLogin, updateUser } from "../controllers/user.controllers.js";
import { verifyToken } from "../../../study/Backend/middleware/verifytoken.js";
 import { upload } from "../middleware/multer.middleware.js";

import express from "express"

const router = express.Router();

router.post("/users",verifyToken, upload.fields([
    { name: "coverImage", maxCount: 1 }
  ]),createUser)

  router.get("/users",verifyToken,getUsers)

router.get("/users/:id",getUserById)

router.delete("/users/:id",deleteU )

router.post("/Login",UserLogin)

router.put("/users/:id",
   upload.fields([{ name: "coverImage", maxCount: 1 }]),
   updateUser)
  

export default router;