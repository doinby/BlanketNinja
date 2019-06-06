$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $backgroundImage = $('.background-image');
    var $dialogContainer = $('<li>').addClass('dialog-container');
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $characterPortrait = $('<img>').addClass('character-portrait');
    var $dialogBubble = $('<div>').addClass('dialog-bubble');
    var $sceneContainer;
    var $sceneImages;
    
    // var $currentScene = $('<img>').addClass('scene-image');
    
    // Declare JS Variables /////////////////////////////
    
    var currentPage = 0;
    var currentDialog;
    
    // Setup Story Component ////////////////////////////    
    
    $gameViewport.mousedown( function() {
        console.log("clicked");
    });
});