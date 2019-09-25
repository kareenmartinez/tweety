const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
  console.log(tweets)
});



// router.get('/', (req, res) => res.send("hello special!!")); //objeto locals rellena el (HTML) index.html <---

module.exports = router;


// app.get("/special", (req, res) => res.send("hello special!!"));
