
'use strict';
const Express = require('express');
const qs = require('querystring');
const router = Express.Router();
const video = require('./video');

router.get('/search/:query', (req, res) => {
    const query = req.params.query;
    video.search(query)
            .then(data => {
                var result = JSON.stringify(data);
                res.send(result);
            });
});

router.get('/watch/', (req, res) => {
    const provider = req.query.provider;
    const url = req.query.url;
    console.log(provider);
//    console.log(url);
    video.findMedias({provider, url})
            .then(data => {
                var result = JSON.stringify(data);
                res.send(result);
            });
});


function errorHandler(err, req, res, next) {
//    console.log(err.message);
    res.status(400).json({message: err.message});
    next();
}

router.use(errorHandler);

module.exports = router;