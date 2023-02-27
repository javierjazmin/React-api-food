const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');


router.get('/', recipesController.list);
router.get('/:id', recipesController.detail);

//Rutas exigidas para la creación del CRUD

router.post('/', recipesController.create);

module.exports = router;