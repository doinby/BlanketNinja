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
    var character = 0;
    var sceneBackground = 0;
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
            dialogs = "";
            break;
            case 1:
                sceneBackground++;
            character = Oliver;
            dialogs = "first";
            break;
            case 2:
            character = Oliver;
            dialogs = "second";
            break;
            case 3:
            $dialogContainer.toggleClass("--dcReversed");
            character = Remy;
            dialogs = "third";
            break;
            case 4:
            $dialogContainer.toggleClass("--dcReversed");
            character = Oliver;
            dialogs = "fourth";
            break;
        }
        spawnDialogs(character, dialogs);
        spawmImage();
        progress++;
    }
    
    function spawnDialogs(character, dialogs) {        
        $characterPortrait
        .addClass('character-portrait')
        .attr('src', character["portrait"]);
        
        $characterName
        .addClass('character-name')
        .html(character["name"]);
        
        $textBubble
        .addClass('text-bubble')
        .show()
        .html(dialogs);
        
        $dialogContainer
        .append($characterPortrait)
        .append($characterName)
        .append($textBubble);
        // .toggleClass("--dcReversed");
    }
    
    function spawmImage() {
        $currentImage
        .attr('src', '../images/scenes/scene0-' + sceneBackground + '.png')
        .addClass('scene-image scene0-' + sceneBackground)
        .appendTo($gameViewport)
        .fadeIn("slow");
    }
    
    
    // $(document).click(function () {
    
    //     spawnCurrentScene.fadeIn("slow");
    
    // });
    
    $(document).mousedown(function() {        
        // $currentImage.fadeOut("slow", function () { 
        //     spawnCurrentScene();
        // });
        spawnCurrentScene();
    });
    
});