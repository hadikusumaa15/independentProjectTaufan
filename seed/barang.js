var Product = require('../models/product');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/kopi';

mongoose.connect(mongoDB);


var products = [
    new Product({
        imagePath: 'https://d1nz104zbf64va.cloudfront.net/dt/a/o/kopi-luwak-what-makes-the-coffee-the-most-expensive-in-the-world.jpg',
        title: 'Kopi Luwak',
        description: 'Kopi yang hanya ada di Indonesia',
        price: 50000
    }),
    new Product({
        imagePath: 'https://www.super-espresso.com/wp-content/uploads/2016/08/espresso-.jpg',
        title: 'Espresso/Short Black',
        description: 'espresso disajikan dengan campuran sedikit krim untuk mengentalkan tekstur kopi saat dingin.',
        price: 20000
    }),
    new Product({
        imagePath: 'https://static1.squarespace.com/static/50e25057e4b0395512a28b45/t/535c57fee4b04f774f7974ce/1398560767228/Long+Black',
        title: 'Americano',
        description: 'versi large sajian espresso yang dibuat dengan cara menyeduhnya langsung dengan air panas',
        price: 15000
    }),
    new Product({
        imagePath: 'https://emeryblogger.files.wordpress.com/2014/11/espresso.jpg?w=640',
        title: 'Doppio',
        description: 'versi ganda espresso, di mana disajikan dalam takaran dua shot, yakni sebanyak total 60 mililiter',
        price: 60000
    }),
    
    new Product({
        imagePath: 'https://www.nespresso.com/ncp/res/uploads/recipes/b32e5a2d382143bfff2885b5348cbc0e52f753ef.jpg',
        title: 'Macchiato',
        description: 'satu atau dua shot espresso yang ditambah dengan busa susu di atasnya',
        price: 40000
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}