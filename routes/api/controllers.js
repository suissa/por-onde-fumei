(function(){

    var Model = require('./model');
    var mongoose = require( 'mongoose' );

    var callback = function( err, data, res ){
        if (err){
            console.log('Erro: ', err);
            res.json(err);

        }else{
            console.log('Sucesso: ', data);
            res.json(data);
        }
    };

    module.exports = {

        create : function( req, res ){
            var dados = {}
              , arr = {
                   lat : req.body.lat
                 , lng : req.body.lng
              };

              // console.log( 'Lat: ' + req.body.lat );
              // console.log( 'Lng: ' + req.body.lng );
              // console.log( 'IdMoto: ' + req.body.idMotoboy );
              // console.log( 'IdPac: ' + req.body.idPacote );

            dados.latLng = new Array(arr);

            var model = new Model( dados );

            console.log( 'POST: ' + req.body );


            model.save( function(err, data){
                callback( err, data, res );
            })
        },


        retrieve : function( req, res ){
            var query = {};

            Model.find( query, function( err, data){
                callback( err, data, res );
            });
        },


        findOne : function( req, res ){
            var query = { _id : req.params.id };

            Model.findOne( query, function( err, data ){
                callback( err, data, res );
            });
        },


        update : function( req, res ){
            var query = { _id : req.params.id }
              , mod = {}
              ;

            var arr = {
                lat : req.body.lat
              , lng : req.body.lng
            };

            mod.$pushAll = { latLng: [arr] };

            Model.update( query, mod, function( err, data){
                callback( err, data, res );
            });
        },


        delete : function( req, res ){
            var query = { _id: req.params.id };

            Model.remove( query, function( err, data ){
                callback( err, data, res );
            });
        }

    };

})();