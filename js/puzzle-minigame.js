$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $progressBar = $('.progress-bar');
    var $notification = $('#notification').addClass('--isHidden');
    var $resulteMsg = $('#result-message').addClass('--isHidden');
    var $notificationHeader = $('<h2>').css('text-align', 'center');
    var $notificationText = $('<p>').css('text-align', 'left');
    var $notificationBtn = $('<a>').addClass('button --flex --centerElement');
    var $blanketUI = $('<div>');
    var $player = $('.player');
    var $hook = $('.hook');
    var $blanket = $('.blanket');
    var $bed = $('.bed');
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var isGameOver = false;
    var hasBlanket = false;
    var currentPlayerPos = $player.position();
    var currentHookPos = $hook.position();
    var currentBlanketPos = $blanket.position();
    var currentBedPos = $bed.position();
    var update;
    var result;
    
    // Setup Scene //////////////////////////////////////
    
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
        .click(function () {
            spawnNotifications("Hint");
        })
        .text("Hint");
    
    // Game Controller //////////////////////////////////
    
    function spawnNotifications(notificationType) {
        switch (notificationType) {
            case "Hint":
            switch (title) {
                case "Blanket Ninja - Puzzle X":
                $notificationText.text("Retrieve the blanket and bring it to where the boy is sleeping");
                break;
                
                case "Blanket Ninja - Puzzle Y":
                    $notificationText.text("Where could the blanket possibly be...? Oh, I know! It's hang on the hook up there!'");
                break;
                
                case "Blanket Ninja - Puzzle Z":
                    $notificationText.text("You are doing great. Just signal me and I will distract the dog for you!");
                break;
            }
            $notificationHeader.text(notificationType);
            $notification
            .append($notificationHeader)
            .append($notificationText)
            .toggle();
            break;
            
            case "Win":
            $notificationBtn
            .click(function () {
                window.location = "../htmls/chapter1-0.html";
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
            .click(function () {
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
    
    function gameOver(result) {
        clearInterval(update);
        $('.blanket, .bed, .hint-btn').off('click');
        switch (result) {
            case "Win":
            spawnNotifications(result);
            break;
            case "Lose":
            spawnNotifications(result);
            break;
        }
    }
    
    // Puzzle Logic
    $hook.click(function () {
        $(this).animate({
            top: currentPlayerPos.top - currentHookPos.top - $hook.height()
        }, 1000);
        $blanket.animate({
            top: currentPlayerPos.top - currentBlanketPos.top + $hook.height() - $blanket.height()
        },1000);
    });
    
    $blanket.click(function () {
        $player.animate({
            left: currentBlanketPos.left - currentPlayerPos.left
        }, 1000, "swing", function () {
            if (collision($player, $blanket)) {
                $blanket.toggle();
                $blanketUI.toggle();
                hasBlanket = true;
            }
        });
    });
    
    $bed.click(function () {
        $player.animate({
            left: currentBedPos.left - currentPlayerPos.left
        }, 1000, "swing", function () {
            if (collision($player, $bed) && hasBlanket) {
                gameOver("Win");
            }
        });
    });
    
    // Animate Progress Bar
    update = setInterval(function () {
        $progressBar.animate({
            width: '-=1'
        }, {
            duration: 100,
            // duration: 1,
            // complete: function () {
            //     console.log("complete");
            // }
        });
        if ($progressBar.width() < 1) {
            gameOver("Lose");
        }
    }, 24);
});