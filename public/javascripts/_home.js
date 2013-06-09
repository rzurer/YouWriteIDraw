/*globals  $, window*/
"use strict";
var initializeNavigator = function () {
    var navigationControl = window.navigationControl,
        sourceArray = window.imageCaptions,
        onNavigate = function (currentIndex) {
            $('#mainCaption').text(sourceArray[currentIndex].caption);
            $('#mainImage').attr('src', sourceArray[currentIndex].image);
            console.log(currentIndex);
        };
    $(function () {
        var controls = {
            navigateFirstControl :  $('#navigateFirst'),
            navigatePreviousControl :  $('#navigatePrevious'),
            navigateNextControl :  $('#navigateNext'),
            navigateLastControl :  $('#navigateLast')
        };
        navigationControl.addListener('navigate', onNavigate);
        navigationControl.ready(controls);
        navigationControl.setSourceArray(sourceArray);
    });
};

