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

let personas = [];
let persona = {};
app.post('/agregar', (req,  res)=>{
    let persona = req.body;
    personas.push(persona);
    res.send(personas);
})
app.get('/mostrarPersonas',(req, res)=>{
    res.json(personas);
})
app.delete('/borrarPersona/:indice', (req, res)=>{
    const indice = parseInt(req.params.indice);
    if (personas[indice])
    {
        personas.splice(indice,1);
        return res.status(200).send(`<img src="https://http.cat/images/200.jpg">`);
    }
    else {
        return res.status(404).send(`<img src="https://http.cat/images/404.jpg">`);
    }
})

app.listen(port,()=>{
    console.log("Iniciado");
})