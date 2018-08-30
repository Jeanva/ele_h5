const express = require("express");
var router = express.Router();

router.get("index",(req,res)=>{
    res.send("Index首页");
})

module.exports=router;