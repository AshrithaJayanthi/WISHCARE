const exp=require('express')
const schemeApi=exp.Router();
const expressErrorHandler=require("express-async-handler")
schemeApi.use(exp.json())

schemeApi.get("/getschemes",expressErrorHandler(async (req,res,next)=>{
    let schemeCollectionObj=req.app.get("schemeCollectionObj")
    let schemeList=await schemeCollectionObj.find().toArray()
    res.send({message:schemeList})
}))

schemeApi.get("/getscheme/:schemename",expressErrorHandler(async (req,res,next)=>{
    let sn=req.params.schemename
    let schemeCollectionObj=req.app.get("schemeCollectionObj")
    let schemeObj=await schemeCollectionObj.findOne({schemename:sn})
    if(schemeObj===null)
    {
        res.send({message:"Scheme doesn't exist"})
    }
    else{
        res.send({message:schemeObj})
    }
}))

schemeApi.post("/createscheme",expressErrorHandler(async (req,res,next)=>{
    let schemeCollectionObj=req.app.get("schemeCollectionObj")
    let newScheme=req.body
     let schemes=await schemeCollectionObj.findOne({schemename:newScheme.schemename})
     if(schemes!==null)
     {
         res.send({message:"scheme already exists"})
     }
     else{
        await schemeCollectionObj.insertOne(newScheme)
        res.send({message:"scheme added successfully"})
     }

}))

schemeApi.delete("/deletescheme/:sno",expressErrorHandler(async (req,res,next)=>{
    let sid=(+ req.params.sno)
    let schemeCollectionObj=req.app.get("schemeCollectionObj")
    let scheme=await schemeCollectionObj.findOne({sno:sid})
    if(scheme===null)
    {
        res.send({message:"scheme id doesn't exists"})
    }
    else{
        await schemeCollectionObj.deleteOne({sno:sid})
        res.send({message:"scheme deleted"})
    }
}))
//export 
module.exports=schemeApi