import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req,  res)=>{
    res.send("Bienvenido a mi servidor");
})
app.get('/saludo', (req,  res)=>{
    res.send("¡Hola, mundo!");
})
app.get('/numero', (req,  res)=>{
    res.send(42);
})
app.get('/usuario', (req,  res)=>{
    res.json({nombre:"Ana", edad:30});
})
app.get('/productos', (req,  res)=>{
    res.send(["computadora", "celular"]);
})
app.get('/materias', (req,  res)=>{
    res.json([{nombre:"Matemática"}, {nombre:"Lengua"}]);
})

app.listen(port,()=>{
    console.log("Iniciado");
})