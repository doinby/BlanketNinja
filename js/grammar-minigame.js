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
    var $wasDragged;
    
    // Declare JS Variables /////////////////////////////
    
    var value;
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var quote
    var author
    var myAnswer;
    var isFilled = 0;
    
    // Setup Scene //////////////////////////////////////
    
    // Game Parameters
    var possibilities;
    var correctAnswers;
    
    switch (title) {
        case "Blanket Ninja - Grammar Challenge X":
        $notificationText.text("Fill out the missing word by drag and drop answers to their correct place");
        quote = "We choose to go to the moon. We <div></div> to the moon in this decade and do the other things, <div></div> because they are easy, <div></div> because they are hard, because that goal will serve to organize and measure the best of our <div></div> and skills, because that challenge is one that we are willing to accept, one we <div></div> to postpone, and one which we intend to win, and the others, too."
        author = "John F. Kennedy, 'The Decision to Go to the Moon'"
        possibilities = ["willing", "choosen", " energize", "choose", "not", "though", "energies", "are unwilling", "but"];
        correctAnswers = ["choose", "not", "but", "energies", "are unwilling"]
        break;
        
        case "Blanket Ninja - Grammar Challenge Y":
        $notificationText.text("");
        quote = "The knowledge that you have emerged wiser and stronger from setbacks means that you <div></div>, ever after, secure in your ability to survive. You will never truly know yourself, or the strength of your relationships, until both <div></div> tested by adversity. Such knowledge <div></div> a true gift, for all that it <div></div> painfully won, and it <div></div> worth more than any qualification I ever earned.";
        author = "J.K. Rowling, 'The Fringe Benefits of Failure'";
        possibilities = ["are", "has been", "will not", "aren't", "not","being", "that", "is", "have been"];
        correctAnswers = ["are", "have been", "is", "is", "have been"];
        break;
        
        case "Blanket Ninja - Grammar Challenge Z":
        $notificationText.text("");
        break;
    }
    
    // Shuffle Array
    possibilities.sort(function() {
        return 0.5 - Math.random(); 
    });
    
    // Add Hint Button
    $hintBtn = $('<a>')
    .addClass('button hint-btn is-primary is-invered is-outlined')
    .appendTo($gameViewport)
    .click(function () {
        spawnNotifications("Hint");
    })
    .text("Hint");
    
    // Create UI Container
    $questionContainer = $('<div>')
    .addClass('tile question-contaner has-background-light --flex')
    .append('<blockquote>' + quote, '<cite>' + author)
    .appendTo($gameViewport);
    
    $aswerContainer = $('<div>')
    .addClass('answer-container --flex')
    .appendTo($gameViewport);
    
    // Define Missing Block
    $('blockquote > div').addClass('blocked-out');
    
    // Spawn Possible Answers
    for (i = 0; i < possibilities.length; i++) {
        $answer = $('<div>')
        .addClass('possibilities --flex --centerElement')
        .appendTo($('.answer-container'))
        .draggable({
            helper: "clone",
            // snap: $('.blocked-out'),
            revert: "invalid",
            drag: function(event, ui) {
                $wasDragged = $(this);
                value = $(this).text();
            }
        })
        .text(possibilities[i]);
    }
    
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
            $notificationText.text("To fill out missing words, drag and drop the answer to the correct block");
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
            
            // Redirect
            switch (title) {
                case "Blanket Ninja - Grammar Challenge X":
                $notificationBtn.click(function () {
                    window.location = "../htmls/challenge7.html";
                });
                break;
                
                case "Blanket Ninja - Grammar Challenge Y":
                $notificationBtn.click(function () {
                    // window.location = "../htmls/chapter3.html";
                });
                break;
                
                // default:
                // $notificationBtn.click(function () {
                //     window.location = "../htmls/map-expert.html";
                // });
                // break;
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
    
    // Compare Dropped Answer with Answer List
    function checkAnwer(x) {
        if (correctAnswers[x] == myAnswer) {
            isFilled++;
            return true;
        } else {
            return false;
        }
    }
    
    function gameOver(result) {
        $('.hint-btn').off('click');
        
        // Draggable disable function not working as intended
        // $('.possibilities, .blocked-out').draggable("destroy");
        switch (result) {
            case "Win":
            spawnNotifications(result);
            break;
            case "Lose":
            spawnNotifications(result);
            break;
        }
    }
    
    // Drag & Drop Mechanics
    $('.blocked-out').droppable({
        accept: $('*'),
        drop: function (event, ui) {
            $(this)
            .addClass('--incorrect')
            .text(value);
            myAnswer = $(this).text();
            if (checkAnwer($(this).index())) {
                $(this)
                .addClass('--correct')
                .toggleClass('--incorrect');
            }
            if (isFilled == correctAnswers.length) {
                gameOver("Win");
            }
        }
    });
    
    $('.blocked-out').draggable({
        helper: "clone",
        // snap: $('.blocked-out'),
        revert: "invalid"
    });
});