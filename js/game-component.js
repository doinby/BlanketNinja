// $(document).ready(function() {
//     console.log("ready!");
// });
$(document).ready(function () {
    
    //START OF STORY COMPONENT
    var $gameViewport = $('.game-viewport');
    var $storyComponent = $('.story-component');
    var $dialogContainer = $('<li>').addClass('dialog-container');
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $characterPortrait = $('<img>').addClass('character-portrait');
    var $dialogBubble = $('<div>').addClass('dialog-bubble');
    
    function appendDialogContainer() {
        for (i = 0; i <= 3; i++) {
            var $makeDialogContainer = $('<li>')
            .addClass ('dialogContainer');
            var $makeCharacterPortraitContainer = $('<div>')
            .addClass ('character-portrait-container');
            var $makeCharacterPortrait = $('<img>')
            .addClass ('character-portrait')
            .css({
                width: 256,
                height: 256,
                // 'background-color': "salmon"
            });
            var $makeDialogBubble = $('<div>')
            .addClass ('dialog-bubble');
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
            .append ($makeCharacterPortrait.attr ('src', "images/" + imageFile + ".png"));
            $makeCharacterPortraitContainer.append (name);
            $makeDialogBubble.append (txt);
        }
    }
    
    appendDialogContainer ();

    $gameViewport.bind('scroll', function () {
        if ($(this).scrollTop () + $(this).innerHeight () >= $(this)[0].scrollHeight) {
            // console.log("reaches the bottom!");
            $storyComponent.remove ();
            drawMenu ();
            initializeMap ();
            // initializeMinigame ();
        }
    });
    
    //END OF STORY COMPONENT
    
    //START OF GAME COMPONENT
    var $uiGrid = $('.ui-grid');
    var $blanketUI = $('.ui-blanket');
    var $timerBar = $('<div>').addClass ('timer-bar');
    var $timerFill = $('<div>').addClass ('timer-fill');
    var $confirmBtn = $("<a>Ok</a>").addClass ("button is-link is-success");
    var $hintBtn = $('<div>').addClass('hint-btn button are-small is-link is-inverted is-outlined');
    var $hintMsg = $('<div>').addClass('hint-msg');
    var $instructionMsg = $('<div>').addClass ('instruction-msg notification');
    var $gameOverMsg = $('<div>').addClass ('gameover-msg notification');
    var $hamburgerBtn = $('.hamburger');
    
    var instruction = "Pick a destination";
    var winMsg = ":) Good Job!";
    var loseMsg = ":( Try Again!";
    var tip = "Tip: none";
    var isGameOver = false;
    var stopAnimation = false;
    
    var $player = $('<div>').addClass ('player');
    var $blanket = $('<div>').addClass ('blanket-avatar');
    var $bed = $('<div>').addClass ('bed-avatar');
    var $floor = $('<div>').addClass ('floor');
    
    // Menu Display
    function drawMenu() {       
        // $gameViewport.css({
        //     "background-color": '#616161',
        // });
        // $uiGrid.append ($hintBtn);
        $hintBtn.append ("Hint");
        $timerBar.appendTo ($uiGrid);
        $timerFill.appendTo ($timerBar);
        $("<i>menu</i>")
        .appendTo($hamburgerBtn)
        .addClass("material-icons md-24");
        
        $instructionMsg
        .appendTo($gameViewport)
        .show();
        
        $hamburgerBtn.mousedown(function() {
            $('.menu')
            .toggle();
        });
        $hintBtn.mousedown(function() {
            $hintMsg
            .toggle();
        });
    };
    
    function initializeMap() {
        $gameViewport.css ({
            'overflow-y': "hidden",
        });
        $instructionMsg
        .show()
        .css({
            top: '30%',
        });

        for (i = 0; i <= 4; i++) {
            $makeButton = $('<a>')
            .addClass ("house button is-link is-rounded ui-house" + i);
            $makeButton.appendTo ($uiGrid);
        }
        
        $('.ui-house2').mousedown(function() {
            // console.log('clicked');
            $('.house').hide();
            $instructionMsg.hide();
            initializeMinigame();
        });
        
        $instructionMsg
        .append(instruction)
        .appendTo('main');
    };
    
    function initializeMinigame() {
        $player.css({
            position: 'absolute',
            left: 50,
            bottom: 100,
            'z-index': 1
        });
        
        $blanket.css({
            position: 'absolute',
            left: 400,
            bottom: 100            
        });
        
        $bed.css({
            position: 'absolute',
            left: 800,
            bottom: 100
        });       
        
        var update = setInterval(function () {
            if (isGameOver == false && stopAnimation == false) {
                $timerFill.animate({ width: '-=1' }, 100);
                if ($timerFill.width() < 1) {
                    gameOver(false);
                }
            }
        }, 24);
        
        $player.appendTo($gameViewport);
        $blanket.appendTo($gameViewport);
        $bed.appendTo($gameViewport);
        $floor.appendTo($gameViewport);
    };
    
    $('.delete').mousedown(function() {
        var tagName = $(this).parent(".notification").tagName;
        console.log(tagName);
        // $('.notification').toggle();
    });
    
    function gameOver(result) {        
        // clearInterval(update);
        // $gameViewport.attr('disabled', true);
        // stopAnimation = true;
        // var isWinning = result;
        // console.log(isWinning);
        stopAnimation = true;
        // clearInterval(update);
        
        if(result == true) {
            $gameOverMsg
            .append(winMsg)
            .appendTo('main')
            .show();
        }        
        else {
            $gameOverMsg
            .append(loseMsg)
            .appendTo('main')
            .show();
            clearInterval(update);
        }        
        
        $confirmBtn
        .appendTo($gameOverMsg)
        .mousedown(function() {
            location.reload();
        });
        // location.reload();
    }
    
    // Check collision between 2 objects
    // REFERENCE
    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;
        
        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }
    
    // Player Controls
    $(document).keydown(function(e) {
        console.log(e.keyCode);
        switch(e.which) {
            case 37: // left
            if(stopAnimation == false) {
                $player.animate({left: '-=16'}, 30);
                break;
            }
            case 39: // right
            if(stopAnimation == false) {
                $player.animate({left: '+=16'}, 30);
                break;
            }
            case 32: // jump
            if(stopAnimation == false) {
                $player.effect("bounce", 200, 50);
            }
            break;
            case 69: // interact
            if(stopAnimation == false) {
                if(collision($player, $blanket)) {
                    $blanket.hide();
                    $blanketUI.show();
                }
                if(collision($player, $bed)) {
                    // console.log('collide');
                    gameOver(true);
                }
            }
            break;
            default: return; // exit this handler for other keys
        }
        // e.preventDefault(); // prevent the default action(scroll / move caret)
    });    
    
    // drawMenu();
    // initializeMap();
    // initializeMinigame();
});