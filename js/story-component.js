// $(document).ready(function() {
//     console.log("ready!");
// });

$(document).ready(function () {
    var $gameViewport = $('.game-viewport');
    var $dialogContainer = $('<li>').addClass('dialog-container');
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $characterPortrait = $('<img>').addClass('character-portrait');
    var $dialogBubble = $('<div>').addClass('dialog-bubble');
    
    function appendDialogContainer() {  
        for (i = 0; i < 10; i++) {
            var $makeDialogContainer = $('<li>')
            .addClass('dialogContainer');
            var $makeCharacterPortraitContainer = $('<div>')
            .addClass('character-portrait');
            var $makeCharacterPortrait = $('<img>')
            .addClass('character-portrait');
            var $makeDialogBubble = $('<div>')
            .addClass('dialog-bubble');
            switch (i) {
                case 0:
                name = "YT"
                txt = "This is dialog number 1";
                break;
                case 1:
                name = "OT"
                txt = "This is dialog number 2";
                break;
                case 2:
                name = ""
                txt = "This is dialog number 2";
                break;
                case 3:
                name = ""
                txt = "";
                break;
                case 4:
                name = ""
                txt = "";
                break;
                case 5:
                name = ""
                txt = "";
                break;
                case 6:
                name = ""
                txt = "";
                break;
            }            
            
            $makeDialogContainer.appendTo($('.story-component'));
            $makeDialogContainer.append($makeCharacterPortraitContainer);
            $makeDialogContainer.append($makeDialogBubble);
            $makeCharacterPortraitContainer.append(name);
            $makeDialogBubble.append(txt);
        }
    }
    
    appendDialogContainer();
});