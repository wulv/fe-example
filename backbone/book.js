var express = require('express');
var app = express();
var fs = require('fs');
var _ = require('underscore');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var path = require('path');
var Book = require('./models/book')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('study1'));
mongoose.connect('mongodb://localhost/book');

app.get('/a', function(req, res) {
    console.log(req.route);
    res.send(req.route.path);
});

// get book list
app.get('/list', function(req, res) {
      Book.fetch(function(err,books){
         if(err){
             console.log(err)
         }
        res.send(books)
     })
    console.log(req.route.path);

    // var data = JSON.parse(fs.readFileSync('./_data.json'));
    // res.send(data);
});
// 获取一条记录
app.get('/get', function(req, res) {
    console.log(req.route.path);
    var id = req.query['id'] || 1;
    Book.findById(id,function(err,book){
       if(err){
           console.log(err)
       }
      res.send(book)
    })
});
// 修改记录
app.put('/edit', function(req, res) {
    var id = req.body._id || 1;
    var bookObj = req.body;
    Book.findById(id,function(err,book){
            if(err){
                console.log(err)
            }
            _book=_.extend(book,bookObj)
            _book.save(function(err,book){
                if(err){
                    console.log(err)
                }
                res.send(book)
            })
    })

    //
    // var data = {
    //   title:req.query['title'],
    //   author:req.query['author']
    // };
    // //var data = JSON.parse(fs.readFileSync('./_data.json'));
    // res.send(data);
});

app.delete('/delete', function(req, res) {
    var id = req.query['id'] || 1;
    console.log(id);
    if(id){
     Book.remove({_id:id},function(err,book){
         if(err){
             console.log(err)
         }else{
             res.json({success:1})
         }
     })
 }


});
// 添加记录
app.post('/edit', function(req, res) {

    console.log(req.body);
    var _book= new Book({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author
    });
          _book.save(function(err,book){
               if(err){
                       console.log(err)
                   }
                   res.send(book);
           })


});

app.listen(3000, function() {

    console.log('Example app listening on port 3000!');
});
