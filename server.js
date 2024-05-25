const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

const port = 80;

function randomge(){
    return {data : Math.floor(Math.random() *100 )};
}
let numbers = {
    id:1,
    data : randomge() }

app.get('/',(req,res)=>{
    res.json(randomge())
})

app.listen(port,()=>{
    console.log("server was running");
})
