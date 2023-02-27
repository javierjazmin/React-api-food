const express = require('express');
const router = express.Router();
const dietsController = require('../controllers/dietsController');

router.get('/', dietsController.list);

module.exports = router;