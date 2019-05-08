// $(document).ready(function() {
//     console.log("ready!");
// });
$(document).ready(function() {
    // Player parameter
    var $gameViewport = $('.game-viewport');
    var $blanketUI = $('.ui-blanket');
    var $timerBar = $('<div>').addClass('timer-bar');
    var $timerFill = $('<div>').addClass('timer-fill');
    var $confirmBtn = $("<a>Ok</a>").addClass("button is-link is-success");
    var $hintBtn = $('.hint-btn');
    var $hintMsg = $('.hint-msg');
    var $hamburgerBtn = $('.hamburger');
    
    var tip = "Tip: none";
    var isGameOver = false;
    
    var $player = $('<div>').addClass('player');
    var $blanket = $('<div>').addClass('blanket-avatar');
    var $bed = $('<div>').addClass('bed-avatar');
    var $floor = $('<div>').addClass('floor');
    
    $('.menu').hide();
    $hintMsg.hide();
    $hintMsg.append(tip);
    
    // Draw initial scene
    function initialize() {
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
        
        $timerBar.appendTo($('.ui-grid'));
        $timerFill.appendTo($timerBar);
        $hintBtn.append("Hint");
        $("<i>menu</i>")
        .appendTo($hamburgerBtn)
        .addClass("material-icons md-24");
        
        $player.appendTo($gameViewport);
        $blanket.appendTo($gameViewport);
        $bed.appendTo($gameViewport);
        $floor.appendTo($gameViewport);
    };
    
    var update = setInterval(function() {
        if(isGameOver == false) {            
            $timerFill.animate({width: '-=1'}, 1000);
        }
        else {
            gameOver();
        }
    }, 24);
    
    $hamburgerBtn.mousedown(function () {
        $('.menu')
        .toggle()
        .css({ 'z-index': 2});
    });
    $hintBtn.mousedown(function () {
        $hintMsg
            .toggle()
            .css({ 'z-index': 2 });
    });
    
    $('.delete').mousedown(function () {
        $('.notification').toggle();
    });
    
    function gameOver() {        
        $("<div></div>")
        .appendTo($('main'))
        .addClass("notification winning-msg")
        .css({
            position: 'absolute',
            display: 'flex',
            'flex-direction': 'column',
            'z-index': 2
        });
        
        $("<p>Good Job!</p>")
        .appendTo($('.winning-msg'))
        .css({
            'padding-bottom': '1em',
        });
        
        $confirmBtn
        .appendTo($('.winning-msg'))
        .mousedown(function() {
            location.reload();
        });
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
            $player.animate({left: '-=16'}, 30);
            break;
            case 39: // right
            $player.animate({left: '+=16'}, 30);
            break;
            case 32: // jump
            $player.effect("bounce", 200, 50);
            break;
            case 69: // interact
            if(collision($player, $blanket)) {
                $blanket.hide();
                $blanketUI.show();
            }
            if(collision($player, $bed)) {
                gameOver();
            }
            break;
            default: return; // exit this handler for other keys
        }
        // e.preventDefault(); // prevent the default action(scroll / move caret)
    });
    
    initialize();
});

//Bulma notification
// document.addEventListener('DOMContentLoaded',() => {
//     (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
//         $notification = $delete.parentNode;
//         $delete.addEventListener('click',() => {
//             $notification.parentNode.removeChild($notification);
//             console.log("clicked");
//         });
//     });
// });