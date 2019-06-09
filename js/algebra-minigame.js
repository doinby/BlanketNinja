$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $notification = $('#notification').addClass('--isHidden');
    var $resulteMsg = $('#result-message').addClass('--isHidden');
    var $notificationHeader = $('<h2>').css('text-align', 'center');
    var $notificationText = $('<p>').css('text-align', 'left');
    var $notificationBtn = $('<a>').addClass('button');
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var update;
    var target;
    var maxTurns;
    var turnCount;
    var operator;
    var tempvalueA;
    var tempvalueB;
    var resetCal = false;
    
    // Setup Scene //////////////////////////////////////
    
    // Add Hint Button
    $hintBtn = $('<a>')
    .addClass('button hint-btn is-primary is-invered is-outlined')
    .appendTo($gameViewport)
    .click(function () {
        spawnNotifications("Hint");
    })
    .text("Hint");
    
    // Create Calculator
    $calculator = $('<div>')
    .addClass('calculator has-background-light')
    .appendTo($gameViewport);
    
    $screen = $('<div>')
    .addClass('screen has-background-light --flex')
    .appendTo($gameViewport);
    
    $googlyEye = $('<div>')
    .addClass('googly-eye has-background-light --flex --centerElement')
    .append('<div class="irish"><div>')
    .appendTo($gameViewport);
    
    // Create Buttons on Calculator
    var calculatorBtnList = [
        "plus",
        "minus",
        "multiply",
        "divide",
        "equal",
        "C",
        "restart",
        "num00"
    ]
    
    for (i = 0; i < calculatorBtnList.length; i++) {
        calculatorBtnList[i] = $('<a>')
        .addClass('button calculator-btn operations is-dark --flex')
        .appendTo($gameViewport)
        .attr('id', calculatorBtnList[i])
        .css({
            'grid-area': calculatorBtnList[i]
        });
        
        calculatorBtnList[i]
        .text(function () {
            // return calculatorBtnList[i].attr('class');
            switch (i) {
                case 0: return "+";
                case 1: return "-";
                case 2: return "x";
                case 3: return "÷";
                case 4: return "=";
                case 5: return "C";
                case 6: return calculatorBtnList[i].attr('id');
                case 7: return "00";
            }
        })
        
        // Customize Button Colors
        switch (calculatorBtnList[i].attr('id')) {
            case "equal":
            calculatorBtnList[i].addClass('is-primary');
            break;
            
            case "restart":
            calculatorBtnList[i].addClass('is-warning');
            break;
            
            case "C":
            calculatorBtnList[i].addClass('is-danger');
            break;
        }
    }
    
    // Create Numeric Buttons on Calculator
    for (i = 0; i < 10; i++) {
        $numPad = $('<a>')
        .addClass('button calculator-btn numbers is-dark --flex')
        .appendTo($gameViewport)
        .attr({
            id: i,
            value: i
        })
        .css({
            'grid-area': 'num' + i
        })
        .text(i);
        
        // Blocking Out Unwanted Number Buttons        
        var disabledNum;
        switch (title) {
            case "Blanket Ninja - Math Challenge X":
            disabledNum = ["1", "3", "5", "8"];
            for (j = 0; j <= disabledNum.length; j++) {
                if (i == disabledNum[j]) {
                    $numPad.attr('disabled', function () {
                        return 'disabled';
                    });
                }
            }
            break;
            
            case "Blanket Ninja - Math Challenge Y":
            target = 1;
            maxTurns = 3;
            break;
            
            case "Blanket Ninja - Math Challenge Z":
            target = 0;
            maxTurns = 2;
            break;
        }        
    }
    
    function spawnChallengeParameter() {
        // Add Target Number
        $target = $('<div>')
        .addClass('tile target has-background-primary has-text-light')
        .append('<p>Target Value:')
        .append('<h3>' + target + '</h3>')
        .appendTo($gameViewport);
        
        // Add Number of Turns
        $turns = $('<div>')
        .addClass('tile turns has-background-light')
        .append('<p>Turns Left:')
        .append('<h3>' + maxTurns + '</h3>')
        .appendTo($gameViewport);
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
                $notificationText.text("Keep a close googly-eye on the number of turns you have left");
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
        switch (result) {
            case "Win":
            spawnNotifications(result);
            break;
            case "Lose":
            spawnNotifications(result);
            break;
        }
    }
    
    // Googly Eye Follows Mouse
    // 'Eyes follow mouse' by Jeremy, https://codepen.io/J-Roel/pen/wWGNQN
    $gameViewport.mousemove(function (event) {
        var eye = $(".irish");
        var x = (eye.offset().left) + (eye.width() / 2);
        var y = (eye.offset().top) + (eye.height() / 2);
        var rad = Math.atan2(event.pageX - x, event.pageY - y);
        var rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
        });
    }); 
    
    $('.calculator-btn').click(function () {
        // var value = parseInt($(this).text());
        if (resetCal) {
            $screen.empty();
            resetCal = false;
            var value = parseInt($(this).text());
            $screen.append(value);
            tempvalueA = parseInt($screen.text());
        }
        else {
            var value = $(this).text();
            function setOperation() {
                operator = value;
                tempvalueB = parseInt($screen.text());
                resetCal = true;
            }
            switch (value) {
                case "+":
                setOperation();
                break;
                
                case "-":
                setOperation();
                break;
                
                case "x":
                setOperation();
                break;
                
                case "÷":
                setOperation();
                break;
                
                case "=":
                $screen.empty();
                console.log(operator);
                switch(operator) {
                    case "+":
                    value = tempvalueA + tempvalueB;
                    break;
                    case "-":
                    value = tempvalueB - tempvalueA;
                    break;
                    case "x":
                    value = tempvalueB * tempvalueA;
                    break;
                    case "÷":
                    value = tempvalueB / tempvalueA;
                    break;
                }
                $screen.append(value);
                resetCal = true;
                break;
                
                case "C":
                $screen.empty();
                tempvalueA = undefined;
                tempvalueB = undefined;
                operator = undefined;
                break;
                
                case "restart":
                location.reload();
                break;
                
                default:
                $screen.append(value);
                tempvalueA = parseInt($screen.text());
                break;
            }
        }
    });
    
    // Defines Challenge Parrameter
    switch(title) {
        case "Blanket Ninja - Math Challenge X":
        target = 56;
        maxTurns = 2;
        spawnChallengeParameter();        
        break;
        
        case "Blanket Ninja - Math Challenge Y":
        target = 1;
        maxTurns = 3;
        break;
        
        case "Blanket Ninja - Math Challenge Z":
        target = 0;
        maxTurns = 2;
        break;
    }
    
});