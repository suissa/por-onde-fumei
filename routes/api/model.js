var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PosicaoSchema = new Schema({
    latLng : { type : Array, default : '', required : true }
  , created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'Posicoe', PosicaoSchema );