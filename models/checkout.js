
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
	userid: {type: Schema.Types.ObjectId, ref: 'User'},
	email: String,
	nama:{type: String, required: true},
	nohp:{type: String, required: true},
	alamat:{type: String, required: true},
	kodepos:{type: String, required: true},
	pesanan:String,
	harga:String,
	status: String
  }, {collection: 'pesans'});
  
  module.exports = mongoose.model('UserData', userDataSchema);