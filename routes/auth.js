/*
Rutas de Usuarios / Auth
host + /api/auth
*/

const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();

const {crearUsuario,loginUsuario,revalidarToken} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const {validarJWT} = require('../middlewares/validar-jwt');

//Rutas
router.post(
    '/new',
    [ //middlewares
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email no tiene un formato valido').isEmail(),
        check('password','El password debe ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ],
    crearUsuario);

router.post(
    '/',
    [//middlewares
    check('email','El email no tiene un formato valido').isEmail(),
    check('password','El password debe ser de 6 caracteres').isLength({min:6}),
    validarCampos
    ],
    loginUsuario);

    //validarJWt es el middleware
router.get('/renew',validarJWT,revalidarToken);

module.exports = router;