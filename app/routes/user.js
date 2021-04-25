const express = require('express');
const ctrlUser = require('../controllers/userController');

const router = express.Router();

router.get('/', ctrlUser.index)//Index - Lista todos los usuarios
        .post('/', ctrlUser.created) //Crea un nuevo usuario
        .get('/:key/:value', ctrlUser.find, ctrlUser.show)
        .put('/:key/:value', ctrlUser.find, ctrlUser.update)
        .delete('/:key/:value', ctrlUser.find, ctrlUser.remove);



module.exports = router;

