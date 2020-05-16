const express  = require('express');
const { check, validationResult } = require('express-validator');


const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.post('/new-user/',UserController.create)
routes.post('/auth/', UserController.auth)
routes.get('/profile/', UserController.verifyJWT, UserController.profile)
module.exports = routes