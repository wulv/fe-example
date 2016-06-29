var express= require('express');
var path = require('path')
var mongoose=require('mongoose')
var Movie=require('./models/movie')
var _=require('underscore')
var port= process.env.PORT || 3000;
var app=express();

mongoose.connect('mongodb://localhost/imooc')

var bodyParser = require('body-parser')
app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'public')))
app.listen(port);

console.log('started on port '+port);

//index page
app.get('/',function(req,res){
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err)
		}
			res.render('index',{
		title:'首页',
		movies:movies
	})
	})

})

//detail page
app.get('/movie/:id',function(req,res){
	var id=req.params.id
	Movie.findById(id,function(err,movie){
		if(err){
			console.log(err)
		}
		res.render('detail',{
		title:'详情页',
		movie:movie
	})
	})

})

//admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'后台录入',
		movie:{
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			language:'',
			flash:'',
			summary:''
		}
	})
})
//admin update movie
app.get('/admin/update/:id',function(req,res){
	var id=req.params.id
	if(id){
			Movie.findById(id,function(err,movie){
		if(err){
			console.log(err)
		}
		res.render('admin',{
		title:'后台更新',
		movie:movie
	})
	})
	}


})

//admin post movie
app.post('/admin/movie/new',function(req,res){
	var id=req.body.movie._id
	var movieObj=req.body.movie
	var _movie
	console.log(id,"到了")

	if (id !== 'undefined') {
		Movie.findById(id,function(err,movie){
			if(err){
				console.log(err)
			}

			_movie=_.extend(movie,movieObj)
			_movie.save(function(err,movie){
				if(err){
					console.log(err)
				}
				res.redirect('/movie/'+movie._id)
			})
		})
	}else{
		console.log(movieObj)
		_movie= new Movie({
			doctor:movieObj.doctor,
			title:movieObj.title,
			country:movieObj.country,
			language:movieObj.language,
			poster:movieObj.poster,
			year:movieObj.year,
			flash:movieObj.flash,
			summary:movieObj.summary
		})
		_movie.save(function(err,movie){
			if(err){
					console.log(err)
				}
			res.redirect('/movie/'+movie._id)
		})
	}
})

//list page
app.get('/admin/list',function(req,res){
		Movie.fetch(function(err,movies){
		if(err){
			console.log(err)
		}
		res.render('list',{
		title:'列表',
		movies:movies
	})
	})

})

//list delete movie
app.delete('/admin/list',function(req,res){
	var id=req.query.id
	if(id){
		Movie.remove({_id:id},function(err,movie){
			if(err){
				console.log(err)
			}else{
				res.json({success:1})
			}
		})
	}
})
