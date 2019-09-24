const express = require('express');
const app = express(); // crea una instancia de una aplicación de express
const port = 3000;
const morgan = require('morgan'); //solo middleware

app.use(function (req, res, next) {
  console.log("soy un middleware");
  next();
});

// app.use('/special', function (req, res, next) {
//   console.log("llegaste a un área especial");
//   next();
// })

morgan('/special', function (req, res, next) {
  console.log("llegaste a un área especial");
  next();

})

app.get("/", (req, res) => res.send("hello"));
app.get("/special", (req, res) => res.send("hello special!!"));

app.listen(port, () => console.log(`listening on port ${port}`))