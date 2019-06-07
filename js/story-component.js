$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $backgroundImage = $('.background-image');
    
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $sceneContainer;
    var $sceneImages;
    
    // var $currentScene = $('<img>').addClass('scene-image');
    
    // Declare JS Variables /////////////////////////////
    
    var currentPage = 0;
    var currentDialog;
    
    // Setup Scene //////////////////////////////////////
    
    function spawnDialogs() {
        var $dialogContainer = $('<div>').addClass('dialog-container --ZGrid');
        var $characterPortrait = $('<img>').addClass('character-portrait');
        var $characterName = $('<p>').addClass('character-name');
        var $dialogBubble = $('<p>').addClass('text-bubble');
        $dialogContainer
        .appendTo($gameViewport)
        .append($characterPortrait)
        .append($characterName)
        .append($dialogBubble);
    }
    
    function spawnCurrentScene() {
        var sceneCount;
        var i = 0;
        
        sceneCount = 5;
        var $currentImage = $('<img>')
        .attr('src', 'images/scenes/scene0-' + i + '.png')
        .addClass('scene-image')
        .appendTo($gameViewport)
        .fadeIn("slow");
    }


    // $(document).click(function () {
        
    //     spawnCurrentScene.fadeIn("slow");
        
    // });
    
    spawnCurrentScene();
    spawnDialogs();
    
});