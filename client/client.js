/*global  window, $*/
"use strict";
var initialize = function () {
        var common, eventListener, navigationControl, imageCaptions;
        common = require('../modules/common').common();
        eventListener = require('../modules/eventListener').eventListener();
        navigationControl = require('../modules/navigationControl').navigationControl(eventListener, common);
        imageCaptions = require('../modules/imageCaptions').imageCaptions();
        window.navigationControl = navigationControl;
        window.imageCaptions = imageCaptions;
    };
initialize();


