const exp=require("express")
const hsptlApi=exp.Router();
const expressErrorHandler=require("express-async-handler")
hsptlApi.use(exp.json())

hsptlApi.post('/register',expressErrorHandler(async(req,res,next)=>{
    let hsptlCollectionObj=req.app.get("hsptlCollectionObj")
    let hsptlObj=req.body
    let hsptl=await hsptlCollectionObj.findOne({hsptlId:hsptlObj.hsptlId})
    if(hsptl===null){
        await hsptlCollectionObj.insertOne(hsptlObj)
        res.send({message:'Hospital registered'})
    }
    else{
        res.send({message:'Hospital already exists'})
    }
}))

hsptlApi.get('/gethospitals',expressErrorHandler(async(req,res,next)=>{
    let hsptlCollectionObj=req.app.get('hsptlCollectionObj')
    let hsptls=await hsptlCollectionObj.find().toArray()
    if(hsptls.length===0)
        res.send({message:'No hospitals'})
    else
        res.send({message:hsptls})
}))

module.exports=hsptlApi