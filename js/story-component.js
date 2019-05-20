// $(document).ready(function() {
//     console.log("ready!");
// });

$(document).ready(function () {
    var $gameViewport = $('.game-viewport');
    var $dialogContainer = $('<div>').addClass('dialog-container');
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $characterPortrait = $('<img>').addClass('character-portrait');
    var $dialogBubble = $('<div>').addClass('dialog-bubble');

    $('article').append($dialogContainer);
    $characterPortraitContainer.appendTo($dialogContainer);
    $characterPortraitContainer.append($characterPortrait);
    $characterPortraitContainer.append('Name');
    $dialogBubble.appendTo($dialogContainer);
    $dialogBubble.append('This is dialog number 2');
});