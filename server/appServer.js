/**
 * Este servidor se integra al aplicativo web por su estructuracion inicial, permite 
 * que los sitios publicados sean dinamicos y muy rapidos, permitiendo acceder a toda la 
 * logica del negocio dentro del mismo proyecto
 * 
 * Creación: Julián García
 * Fecha: 27/01/2022
 * Para: Bits Ingenieria
 * 
 * @param {app Express()} app Referencia del objeto app del express
 * @returns app
 */

// Toda la configuracion del servidor
module.exports = function(app) {
    'use strict'
    var bodyParser = require('body-parser')
    var handlerError = require('./Handler/ErrorHandler')
    var rateLimit = require('express-rate-limit') //Middleware fuerza bruta
    // Importamos las rutas
    var KycRouter = require('./Route/Kyc')
    var ImageRouter = require('./Route/Image')
    var UserRouter = require('./Route/User')

    var meta = require('./Config/Config')
    require('dotenv').config()
    var multer  = require('multer')
    const GridFsStorage = require('multer-gridfs-storage')
    const crypto = require("crypto")
    const path = require("path")
    const Grid = require('gridfs-stream')

    // Biblioteca de imagenes
    

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, hey!")
        
        next()
    }) 
    //Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
    //env
    //app.use(dotenv)
    // Cargamos las rutas
    app.use('/api/v1', KycRouter)
    app.use('/api/v1', ImageRouter)
    app.use('/api/v1', UserRouter)

    //cargar middlewares
    //Asignar el Error handling middleware
    app.use(handlerError.http)

    //Asignar middleware encargado de limitar fuerza bruta
    var apiLimiter = new rateLimit(meta.apiLimiter.config)
    app.use('/api/v1', apiLimiter)
}