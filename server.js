var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kopi');
var Pesan = mongoose.model('pesan', mongoose.Schema({
	nama:String,
	nohp:String,
	alamat:String,
	kodepos:String,
	pesanan:String,
	harga:String,
	status:String
}));

var Product = mongoose.model('product', mongoose.Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

/////TENTANG PESANAN

app.get('/pesanan', function(req, res){
	Pesan.find(function(err, pesanan){
		if(err)
			res.send(err);
		res.json(pesanan);
	});
});

app.get('/pesanan/:id', function(req, res){
	Pesan.findOne({_id:req.params.id}, function(err, pesan){
		if(err)
			res.send(err);
		res.json(pesan);
	});
});
app.post('/pesanan', function(req, res){
	Pesan.create( req.body, function(err, pesanan){
		if(err)
			res.send(err);
		res.json(pesanan);
	});
});

app.delete('/pesanan/:id', function(req, res){
	Pesan.findOneAndRemove({_id:req.params.id}, function(err, pesan){
		if(err)
			res.send(err);
		res.json(pesan);
	});
});
app.put('/pesanan/:id', function(req, res){
	var query = {
		nama:req.body.nama,
		nohp:req.body.nohp,
		alamat:req.body.alamat,
		kodepos:req.body.kodepos,
		pesanan:req.body.pesanan,
		harga:req.body.harga,
		status:req.body.status
	};
	Pesan.findOneAndUpdate({_id:req.params.id}, query, function(err, pesan){
		if(err)
			res.send(err);
		res.json(pesan);
	});
});

////////CRUD KONTEN PRODUCT

app.get('/products', function(req, res){
	Product.find(function(err, products){
		if(err)
			res.send(err);
		res.json(products);
	});
});

app.get('/products/:id', function(req, res){
	Product.findOne({_id:req.params.id}, function(err, product){
		if(err)
			res.send(err);
		res.json(product);
	});
});
app.post('/products', function(req, res){
	Product.create( req.body, function(err, products){
		if(err)
			res.send(err);
		res.json(products);
	});
});

app.delete('/products/:id', function(req, res){
	Product.findOneAndRemove({_id:req.params.id}, function(err, product){
		if(err)
			res.send(err);
		res.json(product);
	});
});
app.put('/products/:id', function(req, res){
	var query = {
		imagePath:req.body.imagePath,
		title:req.body.title,
		description:req.body.description,
		price:req.body.price
	};
	Product.findOneAndUpdate({_id:req.params.id}, query, function(err, product){
		if(err)
			res.send(err);
		res.json(product);
	});
});


app.listen(3030, function(){
	console.log('open server at localhost:3030');
});