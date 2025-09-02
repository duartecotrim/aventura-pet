require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

const homeRouter = require('./app/router/homeRouter');
const adaptabilidadeRouter = require('./app/router/adm/adaptabilidadeRouter');
const corRouter = require('./app/router/adm/corRouter');
const cuidadoVeterinarioRouter = require('./app/router/adm/cuidadoVeterinarioRouer');
const caracteristicaPetRouter = require('./app/router/public/caracteristicaPetRouter');
const contatoUsuarioRouter = require('./app/router/public/contatoUsuarioRouter');
const documentoPetRouter = require('./app/router/public/documentoPetRouter');
const especieRouter = require('./app/router/adm/especieRouter');
const imagemPetRouter = require('./app/router/public/imagemPetRouter');
const passwordHashRouter = require('./app/router/public/passwordHashRouter');
const petCurtidoRouter = require('./app/router/public/petCurtidoRouter');
const petRouter = require('./app/router/public/petRouter');
const petVisualizadoRouter = require('./app/router/public/petVisualizadoRouter');
const porteRouter = require('./app/router/adm/porteRouter');
const racaRouter = require('./app/router/adm/racaRouter');
const sociabilidadeRouter = require('./app/router/adm/sociabilidadeRouter');
const temperamentoRouter = require('./app/router/adm/temperamentoRouter');
const usuarioRouter = require('./app/router/public/usuarioRouter');
const loginRouter = require('./app/router/loginRouter');
const novaContaRouter = require('./app/router/novaContaRouter');
const admRouter = require('./app/router/adm/admRouter');

app.use(express.static('./app/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use('/', novaContaRouter);
app.use('/', loginRouter);
app.use('/', homeRouter);
app.use('/', adaptabilidadeRouter);
app.use('/', corRouter);
app.use('/', cuidadoVeterinarioRouter);
app.use('/', porteRouter);
app.use('/', caracteristicaPetRouter);
app.use('/', contatoUsuarioRouter);
app.use('/', documentoPetRouter);
app.use('/', especieRouter);
app.use('/', imagemPetRouter);
app.use('/', passwordHashRouter);
app.use('/', petCurtidoRouter);
app.use('/', petRouter);
app.use('/', petVisualizadoRouter);
app.use('/', racaRouter);
app.use('/', sociabilidadeRouter);
app.use('/', temperamentoRouter);
app.use('/', usuarioRouter);
app.use('/', admRouter);


app.listen(port, function(){
    console.log(`app online in http://${host}:${port}`);
});