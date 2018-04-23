////////CRUD KONTEN SHOP

app.get('/shops', function(req, res){
	Product.find(function(err, shops){
		if(err)
			res.send(err);
		res.json(shops);
	});
});

app.get('/shops/:id', function(req, res){
	Product.findOne({_id:req.params.id}, function(err, shop){
		if(err)
			res.send(err);
		res.json(shop);
	});
});
app.post('/shops', function(req, res){
	Product.create( req.body, function(err, shops){
		if(err)
			res.send(err);
		res.json(shops);
	});
});

app.delete('/shops/:id', function(req, res){
	Product.findOneAndRemove({_id:req.params.id}, function(err, shop){
		if(err)
			res.send(err);
		res.json(shop);
	});
});
app.put('/shops/:id', function(req, res){
	var query = {
		imagePath:req.body.imagePath,
		title:req.body.title,
		description:req.body.description,
		price:req.body.price
	};
	Product.findOneAndUpdate({_id:req.params.id}, query, function(err, shop){
		if(err)
			res.send(err);
		res.json(shop);
	});
});