// $(document).ready(function() {
//     console.log("ready!");
// });
$(document).ready(function() {
    // Player parameter
    var $player = $('.player');
    var $blanket = $('.blanket-avatar');
    var $blanketUI = $('.ui-blanket');
    var $gameViewport = $('.game-viewport');
    var isGameOver = false;
    
    // Draw initial scene
    function initialize() {
        $player.css({
            left: 50,
            bottom: 100
        });

        $blanket.css({
            left: 400,
            bottom: 100
        });

        // $("<p>Test</p>").appendTo($gameViewport);
        // $blanket.appendTo($gameViewport);      
    };

    var update = setInterval(function() {
        if(isGameOver == false) {
            // if(collision($player, $blanket)) {
            //     $blanket.hide();
            // }
        }
        else {
            location.reload();
        }
    }, 60);  
    
    
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
        
        // if collide with obstacle
        if(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
            return false;
        }
        else {
            return true;
        }
    }
    
    // Player Controls
    $(document).keydown(function(e) {
        // console.log(e.keyCode);
        switch(e.which) {
            case 37: // left
            $player.animate({ left: '-=16' }, 30);
            break;
            case 39: // right
            $player.animate({ left: '+=16' }, 30);
            break;
            case 32: // jump
            $player.animate({
                duration: 50,
                easing: "easeOutBounce"
            });
            break;
            default: return; // exit this handler for other keys
        }
        // e.preventDefault(); // prevent the default action(scroll / move caret)
    });
    
    initialize();
});

//Bulma notification
document.addEventListener('DOMContentLoaded',() => {
   (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        $notification = $delete.parentNode;
        $delete.addEventListener('click',() => {
            $notification.parentNode.removeChild($notification);
        });
    });
});