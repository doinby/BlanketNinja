$(document).ready(function () {
    var $gameViewport = $('.game-viewport');
    var $backgroundImage = $('.background-image');
    var $dialogContainer = $('<li>').addClass('dialog-container');
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $characterPortrait = $('<img>').addClass('character-portrait');
    var $dialogBubble = $('<div>').addClass('dialog-bubble');

    var currentPage;

    $backgroundImage.fadeIn("slow");

    function updateCurrentPage(pageNumber) {
        currentPage = pageNumber;
        console.log(currentPage);
    }

    function appendDialog () {  
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
            // $makeDialogContainer.appendTo ($storyComponent);
            $makeDialogContainer.append ($makeCharacterPortraitContainer);
            $makeDialogContainer.append ($makeDialogBubble);
            $makeCharacterPortraitContainer
            .append($makeCharacterPortrait.attr ('src', "images/" + imageFile + ".png"));
            $makeCharacterPortraitContainer.append (name);
            $makeDialogBubble.append (txt);
        }
    }
    
    $gameViewport.bind('scroll', function () {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            console.log("reaches the bottom!")
        }
    });
    
    // appendDialogContainer();
    updateCurrentPage(0);
});