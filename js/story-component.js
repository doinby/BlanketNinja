$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $backgroundImage = $('.background-image');
    
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $currentImage = $('<img>');
    var $characterPortrait = $('<img>');
    var $characterName = $('<p>');
    var $textBubble = $('<p>');
    var $dialogContainer = $('.dialog-container');
    
    // var $currentScene = $('<img>').addClass('scene-image');
    
    // Declare JS Variables /////////////////////////////
    
    var progress = 0;
    var character;
    var Oliver = {
        name: "Oliver",
        portrait: "../images/Oliver.png",
    }
    var Remy = {
        name: "Remy",
        portrait: "../images/Remy.png",
    }
    
    // Setup Scene //////////////////////////////////////
    
    function spawnCurrentScene() {
        
        switch (progress) {
            case 0:
            character = Oliver;
            txt= "first";
            spawmImage(progress);
            spawnDialogs(character, txt);
            break;
            case 1:
            character = Remy;
            txt = "second";
            spawmImage(progress);
            spawnDialogs(character, txt);
            break;
            case 2:
            character = Oliver;
            txt = "Third";
            spawmImage(progress);
            spawnDialogs(character, txt);
            break;
            case 3:
            txt = "";
            break;
            case 4:
            txt = "";
            break;
            case 5:
            txt = "";
            break;
            case 6:
            break;
        }
        progress++;
    }
    
    function spawnDialogs(character, txt) {        
        $characterPortrait
        .addClass('character-portrait')
        .attr('src', character["portrait"]);
        
        $characterName
        .addClass('character-name')
        .html(character["name"]);
        
        $textBubble
        .addClass('text-bubble')
        .html(txt);
        
        $dialogContainer
        .append($characterPortrait)
        .append($characterName)
        .append($textBubble)
        .toggleClass("--dcReversed");
    }
    
    function spawmImage(i) {
        $currentImage
        .attr('src', '../images/scenes/scene0-' + i + '.png')
        .addClass('scene-image scene0-' + i)
        .appendTo($gameViewport)
        .fadeIn("slow");
    }
    
    
    // $(document).click(function () {
    
    //     spawnCurrentScene.fadeIn("slow");
    
    // });
    
    $(document).mousedown(function() {        
        $currentImage.fadeOut("slow", function () {
            spawnCurrentScene();
        });
    });
    // spawnDialogs();
    
});