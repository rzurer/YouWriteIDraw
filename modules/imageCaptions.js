"use strict";
exports.imageCaptions = function () {
    var imagesDir = "https://s3.amazonaws.com/YouWriteIDraw/";
    return [
        { image: imagesDir + 'allthepuppies.png', caption : 'All the puppies rushed out of the playbocken when the ice cream truck arrived.'},
        { image: imagesDir + 'berrybush.png', caption : 'The berry bush became frightened because of too much wine and song.'}
    ];
};