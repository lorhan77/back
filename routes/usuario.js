const express = require('express');
const router = express.Router();
const usuarioController = require('../controlers/usuario');

router.get('/', usuarioController.getusuario);
router.post('/', usuarioController.createusuario);
router.post('/login', usuarioController.loginUsuario);


module.exports = router;