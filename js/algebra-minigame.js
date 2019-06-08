$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $notification = $('#notification').addClass('--isHidden');
    var $resulteMsg = $('#result-message').addClass('--isHidden');
    var $notificationHeader = $('<h2>').css('text-align', 'center');
    var $notificationText = $('<p>').css('text-align', 'left');
    var $notificationBtn = $('<a>').addClass('button');
    var $calculator = $('.calculator');
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var update;
    var target;
    var turnCount;
    var result;
    
    // Setup Scene //////////////////////////////////////
    
    // Add Hint Button
    $hintBtn = $('<a>')
    .addClass('button hint-btn is-primary is-invered is-outlined')
    .appendTo($gameViewport)
    .click(function () {
        spawnNotifications("Hint");
    })
    .text("Hint");
    
    target = 18;
    // Add Target Number
    $target = $('<div>')
    .addClass('tile target has-background-primary has-text-light')
    .append('<p>Target Value:')
    .append('<h3>' + target + '</h3>')
    .appendTo($gameViewport);
    
    turnCount = 3;
    // Add Number of Turns
    $turns = $('<div>')
    .addClass('tile turns has-background-light')
    .append('<p>Turns Left:')
    .append('<h3>' + turnCount + '</h3>')
    .appendTo($gameViewport);
    
    // Create Calculator
    var calculatorBtnList = [
        "plus",
        "minus",
        "multiply",
        "divide",
        "equal",
        "dot",
        "del",
        "zero",
        "doubleZero",
        "restart"
    ]
    
    for (i = 0; i < calculatorBtnList.length; i++) {
        calculatorBtnList[i] = $('<p>')
        .addClass('button calculator-btn is-dark --flex')
        .appendTo($gameViewport)
        .attr('id', calculatorBtnList[i])
        .css({
            'grid-area': calculatorBtnList[i]
        });
        
        calculatorBtnList[i].text(function() {
            // return calculatorBtnList[i].attr('class');
            switch (i) {
                case 0: return "+";
                case 1: return "-";
                case 2: return "x";
                case 3: return "÷";
                case 4: return "=";
                case 5: return ".";
                case 6: return "DEL";
                case 7: return "0";
                case 8: return "00";
                case 9: return calculatorBtnList[i].attr('id');
            }
        });
        
        switch (calculatorBtnList[i].attr('id')) {
            case "equal":
            calculatorBtnList[i].addClass('is-primary');
            break;
            
            case "restart":
            calculatorBtnList[i].addClass('is-warning');
            break;
            
            case "del":
            calculatorBtnList[i].addClass('is-danger');
            break;
        }
    }
    
    for (i = 1; i < 10; i++) {
        $numPad = $('<p>')
        .addClass('button calculator-btn is-dark --flex')
        .appendTo($gameViewport)
        .attr('id', i)
        .css({
            'grid-area': 'num' + i
        })
        .text(i);
    }
    
    // Game Controller //////////////////////////////////
    
    function spawnNotifications(notificationType) {
        switch(notificationType) {
            case "Hint":
            $notificationHeader.text(notificationType + ':');
            $notification
            .append($notificationHeader)
            .append($notificationText)
            .toggle();
            
            switch(title) {
                case "Blanket Ninja - Math Challenge X":
                $notificationText.text("Keep a close eye on the number of turns you have left");
                break;
                
                case "Blanket Ninja - Math Challenge Y":
                $notificationText.text("");
                break;
                
                case "Blanket Ninja - Math Challenge Z":
                $notificationText.text("");
                break;
            }
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
});