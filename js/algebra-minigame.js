$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $notification = $('#notification').addClass('--isHidden');
    var $resulteMsg = $('#result-message').addClass('--isHidden');
    var $notificationHeader = $('<h2>').css('text-align', 'center');
    var $notificationText = $('<p>').css('text-align', 'left');
    var $notificationBtn = $('<a>').addClass('button --flex --centerElement');
    var $screen;
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var update;
    var target;
    var turnCount;
    var operator;
    var tempvalueA;
    var tempvalueB;
    var tempvalueC;
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
                    $numPad
                    .attr('disabled', function () {
                        return 'disabled';
                    });
                }
            }
                
            break;
            
            case "Blanket Ninja - Math Challenge Y":
            
            break;
            
            case "Blanket Ninja - Math Challenge Z":
            
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
        .append('<h3 class="turn-count">' + turnCount + '</h3>')
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

    function checkResult() {
        if ($screen.text() == target && turnCount > 0) {
            gameOver("Win");
        }
        else if (turnCount <= 0) {
            $turns.addClass('has-background-danger');
            $target.addClass('has-background-danger');
            gameOver("Lose");
        }
    }
    
    function gameOver(result) {
        clearInterval(update);
        $('.calculator-btn').off('click');
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
    
    // Calculator Logic
    $('.calculator-btn').click(function () {
        var value = $(this).text();
        var result = $screen.text();
        // Reduce Turns on Each Click
        turnCount -= 1;
        $('.turn-count').text(turnCount);
        // if (turnCount <= 0) {
        //     $turns.addClass('has-background-danger');
        //     $target.addClass('has-background-danger');
        //     gameOver("Lose");
        // }
        
        // Register Pressed Buttons
        function writeInput() {
            tempvalueB = parseInt($screen.text());
            operator = value;
            $screen.empty();
        }
        
        function calculate() {
            switch (operator) {
                case "+":
                value = tempvalueA + tempvalueB;
                return parseInt(value);
                case "-":
                value = tempvalueB - tempvalueA;
                return parseInt(value);
                case "x":
                value = tempvalueB * tempvalueA;
                return parseInt(value);
                case "÷":
                value = tempvalueB / tempvalueA;
                return parseInt(value);
            }
        }
        
        switch (value) {
            case "+":
            if(tempvalueB) {
                calculate();
                $screen.empty();
                $screen.append(parseInt(value));
                tempvalueB = undefined;
            }
            else {
                writeInput();
                calculate();
            }
            break;
            
            case "-":
            if (tempvalueB) {
                calculate();
                $screen.empty();
                $screen.append(parseInt(value));
                tempvalueB = undefined;
            }
            else {
                writeInput();
                calculate();
            }
            break;
            
            case "x":
            if (tempvalueB) {
                calculate();
                $screen.empty();
                $screen.append(parseInt(value));
                tempvalueB = undefined;
            }
            else {
                writeInput();
                calculate();
            }
            break;
            
            case "÷":
            if (tempvalueB) {
                calculate();
                $screen.empty();
                $screen.append(parseInt(value));
                tempvalueB = undefined;
            }
            else {
                writeInput();
                calculate();
            }
            break;
            
            case "=":
            $screen.empty();
            calculate();
            $screen.append(parseInt(value));
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
            $screen.append(parseInt(value))                
            tempvalueA = parseInt($screen.text());
            break;
        }
        checkResult();
    });
    
    // Defines Challenge Parrameter
    switch(title) {
        case "Blanket Ninja - Math Challenge X":
        target = 56;
        turnCount = 8;
        spawnChallengeParameter();        
        break;
        
        case "Blanket Ninja - Math Challenge Y":
        target = 1029056;
        turnCount = 3;
        spawnChallengeParameter();  
        break;
        
        case "Blanket Ninja - Math Challenge Z":
        target = 0;
        turnCount = 2;
        spawnChallengeParameter();  
        break;
    }

    $("[disabled]").off('click');
});