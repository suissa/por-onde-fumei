var express = require('express')
  , router = express.Router()
  , Controller = require( './controllers' );

// Mostra os motoboy no banco
router.get('/', function(req, res) {
    Controller.retrieve( req, res );
});

// Cria um motoboy no banco
router.post('/', function(req, res) {
    Controller.create( req, res );
});

// Mostra um motoboy especifico do banco
router.get('/:id', function(req, res) {
    Controller.findOne( req, res );
});

// Modifica um motoboy no banco
router.put('/:id', function(req, res) {
    Controller.update( req, res );
});

// Deleta um motoboy do banco
router.post('/:id', function(req, res) {
    Controller.delete( req, res );
});

module.exports = router;