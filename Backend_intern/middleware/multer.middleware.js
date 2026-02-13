// import multer from "multer";

// //on system
// const storage = multer.diskStorage({
//     destination:function(req,res,cb){
//         cb(null,"Public/temp")
//         console.log("FILES RECEIVED:", req.files);

//     },

//     filename: function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })

// export const upload = multer({storage})

import multer from "multer"

const storage = multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,"public/temp")
        console.log("Files recieved",req.files);
        
    },
    filename:function (req,file,cb){
        cb(null,file.originalname)
    }

})

export const upload = multer ({storage})