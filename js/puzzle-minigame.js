
$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $progressBar = $('.progress-bar');
    var $notification = $('#notification').addClass('--isHidden');
    var $resulteMsg = $('#result-message').addClass('--isHidden');
    var $notificationHeader = $('<h2>').css('text-align', 'center');
    var $notificationText = $('<p>').css('text-align', 'left');
    var $notificationBtn = $('<a>').addClass('button');
    var $blanketUI = $('<div>');
    var $player = $('.player');
    var $blanket = $('.blanket');
    var $bed = $('.bed');
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var isGameOver = false;
    var hasBlanket = false;
    var currentPlayerPos = $player.position();
    var currentBlanketPos = $blanket.position();
    var currentBedPos = $bed.position();
    var update;
    var result;
    
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
        
        // Add Hint Button
        $hintBtn = $('<a>')
        .addClass('button hint-btn is-primary is-invered is-outlined')
        .appendTo($gameViewport)
        // .attr('disabled', 'disabled')
        .click(function () {
            spawnNotifications("Hint");
        })
        .text("Hint");
    }
    
    function spawnNotifications(notificationType) {
        switch (notificationType) {
            case "Hint":
            $notificationHeader.text(notificationType);
            $notificationText.text("Here is a hint.");
            $notification
            .append($notificationHeader)
            .append($notificationText)
            .toggle();
            break;
            
            case "Win":
            $notificationBtn
            .click(function () {
                window.location = "../htmls/chapter1.html";
            })
            .text("Next")
            .toggleClass('is-primary');
            $notificationHeader
            .text("Success!");
            $resulteMsg
            .append($notificationHeader)
            .append($notificationBtn)
            .toggle();
            break;
            
            case "Lose":
            $notificationBtn
            .click(function() {
                location.reload(); 
            })
            .text("Try Again");
            $notificationHeader
            .text("Uh Oh!")
            .toggleClass('has-text-light');
            $resulteMsg
            .append($notificationHeader)
            .append($notificationBtn)
            .toggle()
            .toggleClass('has-background-danger');
            break;
        }
    }
    // spawnNotifications("Win");
    spawnUI();
    
    // Game Controller //////////////////////////////////
    
    $blanket
    .click(function () {
        $player.animate({
            left: currentBlanketPos.left - currentPlayerPos.left
        }, 1000, "swing", function () {
            if (collision($player, $blanket)) {
                $blanket.toggle();
                $blanketUI.toggle();
                hasBlanket = true;
            }
        });
    })
    
    $bed
    .click(function () {
        $player.animate({
            left: currentBedPos.left - currentPlayerPos.left
        }, 1000, "swing", function () {
            if (collision($player, $bed) && hasBlanket) {
                gameOver("Win");
            }
        });
    })
    
    update = setInterval(function () {
        $progressBar.animate({
            width: '-=1'
        }, {
            duration: 1, //100
            // complete: function () {
            //     console.log("complete");
            // }
        });
        if ($progressBar.width() < 1) {
            gameOver("Lose");
        }
    }, 24);
    
    function gameOver(result) {
        clearInterval(update);
        $('.blanket, .bed, .hint-btn').off('click');
        switch(result) {
            case "Win":
            spawnNotifications(result);
            break;
            case "Lose":
            spawnNotifications(result);
            break;
        }
    }
    
    // Player Controls //////////////////////////////////
    // $(document).keydown(function(e) {
    //     // console.log(e.keyCode);
    //     switch (e.which) {
    //         case 37: // left
    //         $player.animate({ left: '-=16' }, 30);
    //         break;
    //         case 39: // right
    //         $player.animate({ left: '+=16' }, 30);
    //         break;
    //         case 32: // jump
    //         $player.effect("bounce", 200, 50);
    //         break;
    //         case 69: // interact
    //         if (collision($player, $blanket)) {
    //             $blanket.toggle();
    //             $blanketUI.toggle();
    //         }
    //         if (collision($player, $bed)) {
    //             // console.log('collide');
    //             gameOver();
    //         }
    //         break;
    //         default: return; // exit this handler for other keys
    //     }
    // }); 
    
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