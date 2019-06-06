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
    function spawnSceneData (currentPage) {
        var sceneProgress = 0;
        switch (sceneProgress) {
            case 0:
            sceneCount = 5;
            // spawnSceneImages(currentPage, sceneCount);
            case 1:
            sceneCount = 4;
            case 2:
            sceneCount = 3;
        }
        sceneProgress++;
    }
    
    // function spawnSceneImages(currentPage, sceneCount) {
    //     for (i = 0; i <= sceneCount; i++) {      
    //         $sceneContainer = $('<div>')
    //         .addClass('scene-container --flex')
    //         .appendTo($('.more-container'));
    
    //         $sceneImages = $('<img>')
    //         .addClass('scene-images')
    //         .attr('src', "../images/scenes/scene" + currentPage + "-" + i + ".png")
    //         .appendTo($sceneContainer);
    //     }
    // }
    
    function spawnSceneImages() {
        var i = 0;
        
        $sceneContainer = $('<div>')
        .addClass('scene-container --flex')
        .appendTo($('.more-container'));
        
        $sceneImages = $('<img>')
        .addClass('scene-images')
        .attr('src', "../images/scenes/scene0-" + i + ".png")
        .appendTo($sceneContainer);
        
        i++;
        console.log(i);
    }
    
    // spawnSceneData(0);
    // $gameViewport.mousedown (spawnSceneImages());
    $gameViewport.mousedown( function() {
        console.log("clicked");
    });
});