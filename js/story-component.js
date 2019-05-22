// $(document).ready(function() {
//     console.log("ready!");
// });

$(document).ready(function () {
    var $gameViewport = $('.game-viewport');
    var $storyComponent = $('.story-component');
    var $dialogContainer = $('<li>').addClass('dialog-container');
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $characterPortrait = $('<img>').addClass('character-portrait');
    var $dialogBubble = $('<div>').addClass('dialog-bubble');
    
    function appendDialogContainer () {  
        for (i = 0; i <= 3; i++) {
            var $makeDialogContainer = $('<li>')
            .addClass('dialogContainer');
            var $makeCharacterPortraitContainer = $('<div>')
            .addClass('character-portrait-container');
            var $makeCharacterPortrait = $('<img>')
            .addClass('character-portrait')
            .css({
                width: 256,
                height: 256,
                // 'background-color': "salmon"
            });
            var $makeDialogBubble = $('<div>')
            .addClass('dialog-bubble');
            switch (i) {
                //assuming there are establish scene
                case 0:
                name = "Oliver";
                imageFile = name;
                txt = "Woah! this roof is super slippery!";
                break;
                case 1:
                name = "Remy";
                imageFile = name;
                txt = "Careful not to wake up the kitten!";
                break;
                case 2:
                name = "Oliver";
                imageFile = name;
                txt = "Where are we going, big brother?";
                break;
                case 3:
                name = "Remy";
                imageFile = name;
                txt = "We should start with Otter's house at the corner left.";
                break;
            }            
            $makeDialogContainer.appendTo ($storyComponent);
            $makeDialogContainer.append ($makeCharacterPortraitContainer);
            $makeDialogContainer.append ($makeDialogBubble);
            $makeCharacterPortraitContainer
            .append($makeCharacterPortrait.attr ('src', "images/" + imageFile + ".png"));
            $makeCharacterPortraitContainer.append (name);
            $makeDialogBubble.append (txt);
        }
    }

    $gameViewport.scroll(function () {
        if ($gameViewport.height () == $storyComponent.height ()) {
            console.log("scroll to bottom");
        }
    });
    
    appendDialogContainer ();
});