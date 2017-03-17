/* global __dirname */

'use strict';
const path = require('path');
const express = require('express');
const api = require('./api');
const web = require('./web');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));


web.set('views', __dirname + '/public/html');
web.engine('html', require('ejs').renderFile);
web.set('view engine', 'ejs');

app.use('/api/', api);
app.use('/film/', web);

app.listen(port, function () {
    console.log('Server started on port', port);
});
