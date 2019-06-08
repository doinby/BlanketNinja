
$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $progressBar = $('.progress-bar');
    var $player = $('.player');
    var $blanket = $('.blanket');
    var $blanketUI = $('<div>');
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var isGameOver = false;
    
    // Setup Scene //////////////////////////////////////
    
    function spawnUI() {
        // Add Progress Bar
        $progressBar = $('<div>')
        .addClass('progress-bar has-background-primary');
        $progressContainer = $('<div>')
        .addClass('progress-container has-background-light')
        .append($progressBar)
        .appendTo($gameViewport);
        
        // Add Inventory UI
        $blanketUI
        .addClass('blanket-ui has-background-warning');
        $inventory = $('<div>')
        .addClass('inventory has-background-primary')
        .append($blanketUI)
        .appendTo($gameViewport);
        
        // Add Winnning Message
        
        // Add Losing Message
    }
    
    spawnUI();
    
    // Game Controller //////////////////////////////////
    
    var update = setInterval(function () {
        if (isGameOver == false) {
            $progressBar.animate({
                width: '-=1' 
            }, {
                duration: 1, 
                // complete: function () {
                //     console.log("complete");
                // }
            });
            if ($progressBar.width() < 1) {
                gameOver();
            }
        }   
    }, 24);
    
    function gameOver() {
        clearInterval(update);
    }
    
    // Player Controls //////////////////////////////////
    $(document).keydown(function(e) {
        // console.log(e.keyCode);
        switch (e.which) {
            case 37: // left
            $player.animate({ left: '-=16' }, 30);
            break;
            case 39: // right
            $player.animate({ left: '+=16' }, 30);
            break;
            case 32: // jump
            $player.effect("bounce", 200, 50);
            break;
            case 69: // interact
            if (collision($player, $blanket)) {
                $blanket.toggle();
                $blanketUI.toggle();
            }
            if (collision($player, $bed)) {
                // console.log('collide');
                gameOver();
            }
            break;
            default: return; // exit this handler for other keys
        }
    }); 
    
    // Check collision between 2 objects ////////////////
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
});