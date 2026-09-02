const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const router = require('./routes/staySide.route')
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;
app.use(cors());


mongoose.connect(uri)
    .then(()=>{
        console.log(`DB is connected`);
       
        
    })
    .catch((error)=>{
        console.log(`There was a problem with connection`, error);
        
    })


app.use(express.json())
app.use(express.urlencoded({extended:true}))    


app.get("/test", (req,res)=>{
    res.send("Server is alive")
})

app.use("/stayside", router)



app.listen(port,()=>{
    console.log(`server is definitely running on port ${port}`);
    
})