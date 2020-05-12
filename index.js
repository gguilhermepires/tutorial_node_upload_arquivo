//npm install express --save
//npm install ejs --save
//npm install multer --save

const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
app.set("view engine","ejs");


const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"uploads/")
    },
    filename:function (req,file,cb){
        cb(null,file.originalname+Date.now()+path.extname(file.originalname));
    }
})

//const upload = multer({dest:"uploads/"});    essa configuração vai salvar o arquivo sem extensao e nome
const upload = multer({storage});

app.get("/",(req,res)=>{
    res.render("index");
});
app.post("/upload",upload.single("file"),(req,res)=>{
    res.send("arquivo recebido");
});
app.listen(3001,()=>{
    console.log("servidor iniciado");
})
