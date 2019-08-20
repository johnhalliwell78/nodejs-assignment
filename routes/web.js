const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const multipleUploadController = require('../controllers/multipleUploadController');

let initRoutes = (app) => {
    router.get('/', homeController.getHome);

    router.post('/multiple-upload', multipleUploadController.multipleUpload);

    return app.use('/', router);
};

module.exports = initRoutes;