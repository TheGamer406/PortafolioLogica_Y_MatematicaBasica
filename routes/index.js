const express = require('express');
const app = express();
const path = require('path');
const { title } = require('process');

// Configurar el motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.render('index', { title: 'Portafolio Matematica' });
});
app.get('/ejercicioJerogrificos', (req, res)=>{
    res.render('jerogrificos', { title: 'jerogrificos '})
});
app.get('/P1EA', (req, res) => {
    res.render('P1EA', { title: 'Jerogrificos' });
});
app.get('/P1EB', (req, res) => {
    res.render('P1EB', { title: 'Jerogrificos' });
});
app.get('/P1EC', (req, res) => {
    res.render('P1EC', { title: 'Jerogrificos' });
});
app.get('/P1ED', (req, res) => {
    res.render('P1ED', { title: 'Jerogrificos' });
});
app.get('/P1EE', (req, res) => {
    res.render('P1EE', { title: 'Jerogrificos' });
});
app.get('/P2E1',(req, res,)=>{
    res.render('P2E1',{title:'Jerogrificos'  })
});
app.get('/P2E2',(req, res,)=>{
    res.render('P2E1',{title:'Jerogrificos'  })
});
app.get('/P2E3',(req, res,)=>{
    res.render('P2E1',{title:'Jerogrificos'  })
});
app.get('/P2E4',(req, res,)=>{
    res.render('P2E1',{title:'Jerogrificos'  })
});
// Levantar servidor
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
