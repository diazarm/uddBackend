const express = require('express')

const app = express();

const port = 3001;

app.get("/", (request, response)=>{
    response.status(200).json({msg: "esta es la home"})
})

app.get("/saludo" , (req, res)=>{
    res.json({msg:"saludos desde express!"})
})

app.get("/mensaje", (req, res)=>{
    const {nombre, apellido } = req.query;
    res.json({mensaje : `saludos a ${nombre} ${apellido}`}) 
})

app.get("/dni/:id", (req, res)=>{
    const {id} = req.params;
    res.send(`el dni es: ${id}`)
})

app.listen(port, ()=>{
    console.log(`server on line in port ${port}`);
})