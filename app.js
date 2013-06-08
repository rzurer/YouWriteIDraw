'use strict';
var express, routes, config, app, application;
express = require('express');
config = require('./config');
routes = require('./modules/routes').routes();
app = express();
config.configure(app, express);
routes.initialize(app);
application = app.listen(4000);
