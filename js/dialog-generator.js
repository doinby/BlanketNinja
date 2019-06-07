$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $characterPortrait = $('<img>');
    var $characterName = $('<p>');
    var $textBubble = $('<p>');
    var $dialogContainer = $('.dialog-container');
    
    // Declare JS Variables /////////////////////////////
    
    var currentSceneBackground;
    var chapterCount = 0;
    var sceneCount = 0;
    var character = 0;
    var Oliver = {
        name: "Oliver",
        portrait: "../images/Oliver.png",
    }
    var Remy = {
        name: "Remy",
        portrait: "../images/Remy.png",
    }
    
    // Setup Scene //////////////////////////////////////
    
    function spawmAllImages(maxCount) {
        for (i = 0; i <= maxCount; i++) {
            var $sceneBackground = $('<img>')
            .attr('src', '../images/scenes/scene0-' + i + '.png')
            .addClass('scene-image scene0-' + i)
            .appendTo($gameViewport);
        }
    }
    
    spawmAllImages(3);
    
    function spawnDialogs(character, dialogs) {
        $characterPortrait
        .addClass('character-portrait')
        .attr('src', character["portrait"]);
        
        $characterName
        .addClass('character-name')
        .html(character["name"]);
        
        $textBubble
        .show()
        .addClass('text-bubble')
        .html(dialogs);
        
        $dialogContainer
        .append($characterPortrait)
        .append($characterName)
        .append($textBubble);
        // .toggleClass("--dcReversed");
    }
    
    function dialogList() {
        console.log(chapterCount);
        switch (chapterCount) {
            case 0:
            switch (sceneCount) {
                case 0:
                currentSceneBackground = $('.scene' + chapterCount + '-' + sceneCount).fadeIn("slow");
                $textBubble.hide();
                dialogs = "";
                break;
                case 1:
                character = Oliver;
                dialogs = "first";
                break;
                case 2:
                character = Oliver;
                dialogs = "second";
                break;
                case 3:
                currentSceneBackground.fadeOut("fast");
                currentSceneBackground.next().fadeIn("slow");
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "third";
                break;
                case 4:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "fourth";
                break;
                case 5:
                chapterCount++;
                console.log(chapterCount);
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);            
            break;
        }
    }
    
    function spawnCurrentDialogs() {
        dialogList();
    }
    
    $(document).mousedown(dialogList);
    
});