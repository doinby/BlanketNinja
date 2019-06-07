
$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $notification = $('.notification');
    var $notificationHeader = $('<h2>');
    var $notificationText = $('<p>');
    var $hamburgerBtn = $('.hamburger');
    var $locationBtn;
    
    var $timerBar = $('<div>').addClass('timer-bar');
    var $timerFill = $('<div>').addClass('timer-fill');
    var $confirmBtn = $("<a>Ok</a>").addClass("button is-link is-success");
    var $hintBtn;
    
    var $instructionMsg = $('.instruction-msg');
    var $gameOverMsg = $('.gameover-msg');
    
    // var x = sessionStorage.locationBtn0;
    // console.log(x);
    
    // Declare JS Variables /////////////////////////////
    
    var currentBtn = 0;
    
    // Setup Scene //////////////////////////////////////
    
    $hintBtn = $('<a>')
    .addClass('button hint-btn')
    .appendTo($gameViewport)
    .attr('disabled', 'disabled')
    .text("Hint");
    // .click(function() {
    //     spawnNotifications("hint");
    // });
    
    function spawnNotifications(notificationType) {
        switch (notificationType) {
            case "hint":
            $notificationHeader.text("Hint").css('text-align', 'center');
            $notificationText.text("Here is a hint.");
            $notification
            .append($notificationHeader)
            .append($notificationText)
            .toggle();
            break;    
            case "puzzle-instruction":
            bigText = "Click";
            smallText = "or";
            bigText = "Drag"; 
            break;  
        }
    }
    
    // spawnNotifications('hint');
    
    function spawnMapLocations() {        
        for (i = 0; i < 4; i++) {
            $locationBtn = $('<a>')
            .addClass('button is-link is-rounded locationBtn' + i)
            .append($('<i>').addClass('im im-location'))
            .appendTo($gameViewport);
            
            switch(i) {
                case 0:
                checkDisabledBtn(i);
                $locationBtn
                .click(function () {
                    sessionStorage.btn0 = "disabled";
                })
                .css({
                    'grid-column': '4 / 5',
                    'grid-row' : '4 / 5'
                });
                break;
                case 1:
                checkDisabledBtn(i);
                $locationBtn
                .click(function () {
                    sessionStorage.btn1 = "disabled";
                })
                .css({
                    'grid-column': '6 / 7',
                    'grid-row': '5 / 6'
                });
                break;
                case 2:
                checkDisabledBtn(i);
                $locationBtn
                .click(function () {
                    sessionStorage.btn2 = "disabled";
                })
                .css({
                    'grid-column': '8 / 9',
                    'grid-row': '6 / 7'
                });
                break;
                case 3:
                checkDisabledBtn(i);
                $locationBtn
                .click(function () {
                    sessionStorage.btn3 = "disabled";
                })
                .css({
                    'grid-column': '3 / 4',
                    'grid-row': '7 / 8'
                });
                break;
            }
        }
    }
    
    function checkDisabledBtn (x) {
        var isDisabled = [
            sessionStorage.btn0,
            sessionStorage.btn1,
            sessionStorage.btn2,
            sessionStorage.btn3
        ]
        console.log(isDisabled[0]);
        
        if (isDisabled[x]) {
            $locationBtn
            .attr('disabled', 'disabled');
        }
        else {
            $locationBtn
            .attr('href', '../htmls/puzzle' + x + '.html');
        }
    }
    
    // function checkDisabledBtn () {
    //     if (sessionStorage.btn0 == "disabled") {
    //         $('.locationBtn' + i)
    //         .attr('disabled', 'disabled');
    //     }
    //     else {
    //         $('.locationBtn' + i)
    //         .removeAttr('disabled');
    //     }
    // }
    
    spawnMapLocations();
    
    // $locationBtn.click(function() {
    //     window.location = "../htmls/puzzle1.html";
    // });
});