export const express = require('express');
export const requiresAuth = require('express-openid-connect');
export const router = express.Router();
export const deleteSnack = require('../controllers/snack.js');
export const swaggerUi = require('swagger-ui-express');
export const swaggerDocument = require('../swagger.json');