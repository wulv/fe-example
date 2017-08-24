var express = require('express');
var app = express();
app.use(express.static('study1'));
app.get('/a', function(req, res) {

    // res.json(req);
    console.log(req.route);
    res.send(req.route.path);
});

app.get('/getman', function(req, res) {
    console.log(req.route.path);
    res.send({name: 'wulv', age: '22'});
});

app.get('/getman', function(req, res) {
    console.log(req.route.path);
    res.send({name: 'wulv', age: '22'});
});

app.get('/books', function(req, res) {
    console.log(req.route.path);
    res.send([
        {
            name: 'wulv11'
        }, {
            name: 'wulv22'
        }, {
            name: 'wulv33'
        }
    ]);
});

app.post('/man', function(req, res) {
    console.log(req.route.path);
    res.send({name: 'wulv', age: '22'});
});

app.listen(3000, function() {

    console.log('Example app listening on port 3000!');
});
