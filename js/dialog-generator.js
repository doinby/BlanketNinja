$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $dialogContainer = $('.dialog-container');
    var $characterPortrait = $('<img>');
    var $characterName = $('<h4>');
    var $textBubble = $('<p>');
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var currentSceneBackground;
    var chapterCount = 0;
    var sceneCount = 0;
    var character = 0;
    var dialogs;
    var Oliver = {
        name: "Oliver",
        portrait: "../images/Oliver.png",
    }
    var Remy = {
        name: "Remy",
        portrait: "../images/Remy.png",
    }
    var Blank = {
        name: "",
        portrait: "../images/Blank.png",
    }
    
    // Setup Scene //////////////////////////////////////
    
    // Add Dialog Container
    $dialogContainer = $('<section>')
    .addClass('dialog-container')
    .appendTo($('main'));
    
    function spawmAllImages(maxCount) {
        for (i = 0; i <= maxCount; i++) {
            var $sceneBackground = $('<img>')
            .attr('src', '../images/scenes/scene0-' + i + '.png')
            .addClass('scene-image scene0-' + i)
            .appendTo($gameViewport);
        }
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
        .html(dialogs);
        
        $dialogContainer
        .append($characterPortrait)
        .append($characterName)
        .append($textBubble);
        // .toggleClass("--dcReversed");
    }
    
    // Create Dialogs For Each Scenes
    function dialogData() {
        switch (title) {
            case "Blanket Ninja - Intro":
            chapterCount = 0;
            spawmAllImages(4);
            switch (sceneCount) {
                case 0:
                currentSceneBackground = $('.scene' + chapterCount + '-' + sceneCount).fadeIn("slow");
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                character = Oliver;
                dialogs = "<i>*pant* *pant*";
                break;
                
                case 2:
                character = Oliver;
                dialogs = "Remy! This way!";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Wait for me!!";
                break;
                
                case 6:
                character = Remy;
                dialogs = "Woa! That was so close. <i>*pant* *pant*";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Yeah. <i>*pant* *pant*";
                break;
                
                case 8:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Good thing we are ninjas! Haha.";
                break;
                
                case 9:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "We've got a lot of work to do. Let's go.";
                break;
                
                case 10:
                chapterCount++;
                window.location = "../htmls/map.html"
                break;
                
                default:
                currentSceneBackground.fadeOut("fast");
                currentSceneBackground.next().fadeIn("slow");
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Map":
            chapterCount = 1;
            character = Oliver;
            dialogs = "Where should we go now, Remy?";
            spawnDialogs(character, dialogs);
            sceneCount++;
            break;
            
            case "Blanket Ninja - Chapter 3":
            chapterCount = 3;
            
            break;
        }
    }
    
    $(document).mousedown(dialogData);
    
});

