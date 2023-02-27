const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cors = require("cors");
const app = express();


//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const recipesRoutes = require('./routes/recipesRoutes');
const dietsRoutes = require('./routes/dietsRoutes');

// view engine setup
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/recipes', recipesRoutes);
app.use('/diets', dietsRoutes);

//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
