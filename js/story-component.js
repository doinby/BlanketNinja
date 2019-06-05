$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $backgroundImage = $('.background-image');
    var $dialogContainer = $('<li>').addClass('dialog-container');
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $characterPortrait = $('<img>').addClass('character-portrait');
    var $dialogBubble = $('<div>').addClass('dialog-bubble');
    
    // Declare JS Variables /////////////////////////////
    
    var currentPage = 0;
    var currentDialog;
    
    // Setup Story Component ////////////////////////////
    function StorySetup() {
        switch (progress) {
            case 0:
            updateCurrentBackgroundImage(currentPage);
            break;
            case 1:
            
            break;
            case 2:
            
            break;
            case 3:            
            
            break;
            case 4:            
            
            break;
            case 5:
            
            break;
        }
        progress++;
    }
    
    function updateCurrentBackgroundImage (i) {
        i = currentPage;
        $gameViewport.css({
            'background-image': "url(../images/background-" + i + ".png)",
        });
    }
    
    function currentDialog() { 
        
    }

    updateCurrentBackgroundImage();
    // appendDialogContainer();
    $backgroundImage.fadeIn("slow");
});