$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $notification = $('#notification').addClass('--isHidden');
    var $resulteMsg = $('#result-message').addClass('--isHidden');
    var $notificationHeader = $('<h2>').css('text-align', 'center');
    var $notificationText = $('<p>').css('text-align', 'left');
    var $notificationBtn = $('<a>').addClass('button --flex --centerElement');
    var $blockedOut = $('.blocked-out');
    var $answer = $('.answer');
    var value;
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var text = 'We choose to go to the moon. We <div></div> to the moon in this decade and do the other things, <div></div> because they are easy, <div></div> because they are hard, because that goal will serve to organize and measure the best of our <div></div> and skills, because that challenge is one that we are willing to accept, one we <div></div> to postpone, and one which we intend to win, and the others, too.'
    
    var myAnswer;
    
    // Setup Scene //////////////////////////////////////
    
    // Game Parameters
    var possibilities = ["willing", "choosen", " energize", "choose", "not", "though", "energies", "are unwilling", "but"];
    var correctAnswers = ["choose", "not", "but", "energies", "are unwilling"]
    
    // Add Hint Button
    $hintBtn = $('<a>')
    .addClass('button hint-btn is-primary is-invered is-outlined')
    .appendTo($gameViewport)
    .click(function () {
        spawnNotifications("Hint");
    })
    .text("Hint");
    
    $('blockquote').append(text);
    $('blockquote > div').addClass('blocked-out');
    
    var $draggedElement;
    for (i = 0; i < possibilities.length; i++) {
        $answer = $('<div>')
        .addClass('possibilities --flex --centerElement')
        .appendTo($('.answer-container'))
        .draggable({
            snap: $('.blocked-out'),
            revert: "invalid",
            drag: function(event, ui) {
                $draggedElement = $(this);
                value = $(this).text();
            }
        })
        .text(possibilities[i]);
    }
    
    $('.blocked-out').droppable({
        accept: $('.possibilities'),
        drop: function (event, ui) {
            $(this).text(value);   
            myAnswer = $(this).text();
            if (checkAnwer($(this).index())) {
                $(this).addClass('--correct');
            } else {
                $(this).addClass('--incorrect');  
            }
            $draggedElement.remove();
        }
    });
    
    // Game Controller //////////////////////////////////
    
    function spawnNotifications(notificationType) {
        switch (notificationType) {
            case "Hint":
            $notificationHeader.text(notificationType + ':');
            $notification
            .append($notificationHeader)
            .append($notificationText)
            .toggle();
            
            // Hint Messages
            switch (title) {
                case "Blanket Ninja - Math Challenge X":
                $notificationText.text("Keep a close googly-eye on the number of turns you have left");
                break;
                
                case "Blanket Ninja - Math Challenge Y":
                $notificationText.text("Multiply an '8' with an 3-digits number to get an 4-digits number.");
                break;
                
                case "Blanket Ninja - Math Challenge Z":
                $notificationText.text("You are a math genius, you can do it!");
                break;
            }
            break;
            
            case "Win":
            $notificationBtn
            .text("Next")
            .toggleClass('is-primary');
            $notificationHeader
            .text("Success!");
            $resulteMsg
            .append($notificationHeader)
            .append($notificationBtn)
            .toggle();
            
            switch (title) {
                case "Blanket Ninja - Math Challenge X":
                $notificationBtn.click(function () {
                    window.location = "../htmls/chapter1.html";
                });
                break;
                
                case "Blanket Ninja - Math Challenge Z":
                $notificationBtn.click(function () {
                    window.location = "../htmls/chapter3.html";
                });
                break;
                
                default:
                $notificationBtn.click(function () {
                    window.location = "../htmls/map-expert.html";
                });
                break;
            }
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
    
    function checkAnwer(x) {
        if (correctAnswers[x] == myAnswer) {
            return true;
        } else {
            return false;
        }
    }
});