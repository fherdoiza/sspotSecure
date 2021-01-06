const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
var cors = require('cors');

//Init
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cors({
    origin: false
}));

// Global Variables
app.use((req, res, next) => {
    next();
});

// Rutas / Servicios
app.get('/', (req, res) => {
    return res.json({ estado: "activo" });
});

// Rutas / Servicios
app.post('/validation', (req, res, next) => {
    console.log(req.body);
    const { code } = req.body;

   const response = Math.round(Math.random())


    return res.json({ response, code });
});

// Correr server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});