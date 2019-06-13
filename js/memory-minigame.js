$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $notification = $('#notification').addClass('--isHidden');
    var $resulteMsg = $('#result-message').addClass('--isHidden');
    var $notificationHeader = $('<h2>').css('text-align', 'center');
    var $notificationText = $('<p>').css('text-align', 'left');
    var $notificationBtn = $('<a>').addClass('button is-primary --flex --centerElement');
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var value;
    var maxCount;
    var correctSequence;
    var progress = 0;
    var mySequence;
    var isPaused = true;
    var matchCount = 0;
    
    // Setup Scene //////////////////////////////////////
    
    // Add Hint Button
    $hintBtn = $('<a>')
    .addClass('button hint-btn is-primary is-invered is-outlined')
    .appendTo($gameViewport)
    .click(function () {
        spawnNotifications("Hint");
    })
    .text("Hint");
    
    // Add Progress Bar
    $progressBar = $('<div>')
    .addClass('progress-bar has-background-primary');
    $progressContainer = $('<div>')
    .addClass('progress-container has-background-light')
    .append($progressBar)
    .appendTo($gameViewport);
    
    // Add Input Screen
    $screen = $('<div>')
    .addClass('screen has-background-light --flex')
    .append('<div class="last-pressed --flex"></div><div class="your-sequence"></div>')
    .appendTo($gameViewport);
    
    // Game Parameters        
    switch (title) {
        case "Blanket Ninja - Direction Memory Challenge X":
        maxCount = 5;
        break;
    }
    
    correctSequence = new Array(maxCount);
    
    // Game Controller //////////////////////////////////
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function spawnNotifications(notificationType) {
        switch (notificationType) {
            case "Hint":
            $notification
            .append($notificationHeader.text(notificationType + ':'))
            .append($notificationText.text("Try to memorize the arrow sequence before they disappears."))
            .toggle();
            break;
            
            case "Instruction":
            $instruction = $('<h4>')
            .addClass('instruction notification')
            .text("Press any key to start")
            .appendTo($gameViewport);
            break;
            
            case "Correct Sequence":
            $correctSequence = $('<div>')
            .addClass('correct-sequence notification is-primary --flex')
            .delay(1000)
            .toggle("fold")
            .appendTo($gameViewport);
            break;
            
            case "Win":
            $notificationBtn
            .text("Next");
            $notificationHeader
            .text("Success!");
            $resulteMsg
            .append($notificationHeader)
            .append($notificationBtn)
            .toggle();
            
            // Redirect            
            $notificationBtn.click(function () {
                window.location = "../htmls/map-expert.html";
            });
            
            case "Lose":
            $notificationBtn
            .click(function () {
                location.reload();
            })
            .text("Try Again")
            .toggleClass('is-danger');
            $notificationHeader
            .text("Uh Oh!");
            $resulteMsg
            .append($notificationHeader)
            .append($notificationBtn)
            .toggle()
            .toggleClass('has-background-warning');
            break;
        }
    }
    
    function findKeySymbol(x) {
        switch (x) {
            case 37: // left         
            return '<i class="im im-arrow-left"></i>'
            break;
            case 38: // up
            return '<i class="im im-arrow-up"></i>'
            break;
            case 39: // right
            return '<i class="im im-arrow-right"></i>'
            break;
            case 40: // down
            return '<i class="im im-arrow-down"></i>'
            break;
            default:
            return;
        }
    }
    
    function start() {
        isPaused = false
        update = setInterval(function () {
            $progressBar.animate({
                width: '-=1'
            }, {
                duration: 1,
                // complete: function () {
                //     spawnNotifications("Instruction");
                // }
            });
            
            if ($progressBar.width() < 1) {
                gameOver("Lose");
            }
        }, 24);
    }    
    
    function gameOver(result) {
        clearInterval(update);
        $('.hint-btn').off('click');
        switch (result) {
            case "Win":
            spawnNotifications(result);
            break;
            case "Lose":
            spawnNotifications(result);
            break;
        }
    }
    
    // Add Instruction
    spawnNotifications("Instruction");
    
    // Show correct sequence which disappears in 1000 interval
    
    spawnNotifications("Correct Sequence");
    for (i = 0; i < correctSequence.length; i++) {
        correctSequence[i] = getRandomNumber(37, 40);
        var keyIndex = parseInt(correctSequence[i]);
        $correctSequence.append(findKeySymbol(keyIndex));
    }
    $correctSequence
    .find("i")
    .addClass('button is-primary --flex --centerElement')
    
    // Record Key Pressed Sequence
    mySequence = new Array();
    $(document).keydown(function (e) {
        var keySymbol;      
        if (isPaused) {
            // Prevent Arrow Keys Pressed at the Start
            if (e.which < 37 || e.which > 40) {
                start();
                $instruction.text("Recreate the sequence with 'Arrow Keys'");
            }
        } else {
            // Limit Number of Keys
            if (mySequence.length < correctSequence.length) {
                if (e.which >= 37 && e.which <= 40) {
                    mySequence[progress] = e.which;
                }
                
                $('.your-sequence').append(findKeySymbol(e.which));
                $('.last-pressed').html(findKeySymbol(e.which));
                $screen.find('i').addClass('button is-primary --flex -- centerElement');
                
                // Increase matching pairs when found
                if (correctSequence[progress] == mySequence[progress] && mySequence != false) {
                    matchCount++;
                    if (matchCount == correctSequence.length) {
                        gameOver("Win");
                    }
                }
                progress++;
            } else {
                // If key limit is reached without finding enough matching pairs
                if (matchCount < correctSequence.length) {
                    gameOver("Lose");
                }
            }
        }        
    });
});