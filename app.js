const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

// Register the mustache template engine
app.engine('mustache', mustacheExpress());

// Set mustache as the engine to use for our views
app.set('view engine', 'mustache');

// Tell express where are view files are located
app.set('views', './views');

app.get('/', function (request, response) {
  var context = {location: 'to TIY'};
  response.render('index', context);
});


app.get('/add/:num1/:num2/', function(req, res){
  var number1 = req.params.num1
  , number2 = req.params.num2;
  var sum = parseInt(number1) + parseInt(number2);

  var object1 = {

  };

  var coolArray = [];

  object1.listOfThings = coolArray;

  var context = {
    'number1': number1
    , 'number2': number2
    , 'sum': sum
    , 'favs': [
      {'number': 3}
      ,{'number': 5}
      ,{'number': 13}
    ]
  };

  res.render('add', context);
});

app.get('/subtract/:num1/:num2/', function(req, res){
  var number1 = req.params.num1
  , number2 = req.params.num2;
  console.log(number1);
  console.log(number2);
  var sum = parseInt(number1) - parseInt(number2);
  res.send("Total: " + sum);
});

app.get('/cool/:name', function (request, response) {
  // do stuff with request
  var firstName = request.params.name;

  // do stuff on response
  response.send(firstName + " is cool!");
});

app.get('/fruit/:kind/:amount', function (request, response) {
  // do stuff with request
  var amount = request.params.amount
  , kind = request.params.kind;

  // do stuff on response
  response.send("Get from the store " + amount + " " + kind);
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
