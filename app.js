const express = require('express');
const app = express(); // crea una instancia de una aplicación de express
const port = 3000;
// const morgan = require('morgan'); //solo middleware
const nunjucks = require("nunjucks");
const expressNunjucks = require('express-nunjucks');
const routes = require('./routes');
app.use('/', routes);


app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
// nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los 

nunjucks.configure('views', { noCache: true });

// app.use(function (req, res, next) {
//   console.log("soy un middleware");
//   next();
// });

// app.use('/special', function (req, res, next) {
//   console.log("llegaste a un área especial");
//   next();
// })

// app.get("/", (req, res) => res.send("<h1>Holaa</h1>"));  

app.use(express.static('public')) //



app.listen(port, () => console.log(`listening on port ${port}`))

var locals = { //object que rellena el html
  title: 'An Example',
  people: [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermione' }
  ]
};

nunjucks.render('index.html', locals, function (err, output) {  //en CONSOLA aparece el html rellenado con las propiedades del obj locals <---
  console.log(output, "a");
});


