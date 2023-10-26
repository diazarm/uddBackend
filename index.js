const express = require('express')

const app = express();

const port = 3001;

app.get("/", (request, response)=>{
    response.status(200).json({msg: "esta es la home"})
})

app.get("/saludo" , (req, res)=>{
    res.json({msg:"saludos desde express!"})
})

app.listen(port, ()=>{
    console.log(`server on line in port ${port}`);
})