const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const memories = JSON.parse(fs.readFileSync("memories.json"));

app.post("/chat",(req,res)=>{

const message=req.body.message;

const reply=`Your grandpa says:
I MISS U My dear.I always love u beta.
Stay strong and I am always proud of you ❤️`;

res.json({reply})

})

app.listen(3000,()=>{
console.log("Grandpa AI running on http://localhost:3000")
})