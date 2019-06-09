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
    var result;
    
    // Setup Scene //////////////////////////////////////
    
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
        "dot",
        "DEL",
        "zero",
        "doubleZero",
        "restart"
    ]

    for (i = 0; i < calculatorBtnList.length; i++) {
        calculatorBtnList[i] = $('<a>')
            .addClass('button calculator-btn is-dark --flex')
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
                    case 5: return ".";
                    case 6: return "DEL";
                    case 7: return "0";
                    case 8: return "00";
                    case 9: return calculatorBtnList[i].attr('id');
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

            case "DEL":
                calculatorBtnList[i].addClass('is-danger');
                break;
        }
    }

    // Create Numeric Buttons on Calculator
    for (i = 1; i < 10; i++) {
        $numPad = $('<a>')
            .addClass('button calculator-btn is-dark --flex')
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
        $numPad.attr('disabled', function () {
            // return 'disabled';
        });
    }
    
    $('.button').click(function() {
        console.log('clicked');
    })
});