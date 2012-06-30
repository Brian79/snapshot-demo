
//var data = require('./data/data.js');
var express = require('express');

var app = express.createServer();
var viewEngine = 'jshtml'; // modify for your view engine

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', viewEngine);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
  app.use(express.errorHandler());
});

// *******************************************************

//io.sockets.on('connection', function(socket) {
//    socket.on('test', function(data) {
//        console.log('received message: ' + data); 
//    });
//});

app.get('/', function(req, res) {
    //console.log('getting index');
    
    //var instance = new data.GuestPost();
    //instance.title = 'hello';
    //instance.save(function (err) {
    //});
    
    res.render('index');
});

app.post('/admin/submit', function(req, res) {

    //console.log(req.body.snap);
    res.redirect('back');
});

app.listen(process.env.C9_PORT, process.env.IP, function() {
    console.log('listening on c9 ' + process.env.C9_PORT);
});

