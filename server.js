const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

const port = 3000;

function randomge(){
    return Math.floor(Math.random() *100 );
}
let numbers = {
    id:1,
    data : randomge() }

app.get('/random-number',(req,res)=>{
    res.json(randomge())
})

app.listen(port,()=>{
    console.log("server was running");
})