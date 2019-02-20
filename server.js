var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://super:super1@ds221435.mlab.com:21435/mk_todo_db');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// app.use(function(req, res){
//     res.status(404).send({url:req.originalUrl + ' not found'}); 
// });

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);