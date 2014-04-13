'use strict';
exports.configure = function (app, express, browserify) {
  app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set('view cache');
    app.use(express.cookieParser());
    app.use(express.logger());
    app.use(express.methodOverride());
    app.use(express.session({ secret: 'secret'}));
    app.use('/', express.static(__dirname + '/public', { maxAge: 31557600000 }));
    app.use(app.router);
    app.use('/js', browserify('./client'));
  });
};