const exp=require("express")
const app=exp()
const path=require("path")
require("dotenv").config()

const mc=require("mongodb").MongoClient;
//import apis
const schemeApi=require("./apis/schemesapi")
const hsptlApi=require("./apis/registerapi")



//execute specific api based on path
app.use("/scheme", schemeApi)
app.use("/hsptl",hsptlApi)


// app.use("/product",productApi)
//connect
app.use(exp.static(path.join(__dirname,'./dist/healthcare/')))
//connection string

 databaseUrl=process.env.DATABASE_URL

//connect to db
mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("err in db connection:",err)
    }
    else{
        //getting db obj from client object
        let databaseObj=client.db("schemedb")

        //create usercollection obj

       let schemeCollectionObj=databaseObj.collection("schemescollection")
       let hsptlCollectionObj=databaseObj.collection('hospitalcollection')
        app.set('hsptlCollectionObj',hsptlCollectionObj)
       
        app.set("schemeCollectionObj",schemeCollectionObj)
        console.log("connected to scheme database!")
        console.log("connected to hospital database!")
       
        

    }
})





app.use((req,res,next)=>{
    res.send({message:`${req.url} isnt valid`})
})

app.use((err,req,res,next)=>{
    res.send({message:`error is ${err.message} `})
})
//assigning port
const port=process.env.PORT || 8080

app.listen(port,()=>console.log(`server listening on ${port}`))











