$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $hamburgerBtn = $('.hamburger');
    var $locationBtn;
    
    var $timerBar = $('<div>').addClass('timer-bar');
    var $timerFill = $('<div>').addClass('timer-fill');
    var $confirmBtn = $("<a>Ok</a>").addClass("button is-link is-success");
    var $hintBtn = $('.hint-btn');
    var $hintMsg = $('.hint-msg');
    var $instructionMsg = $('.instruction-msg');
    var $gameOverMsg = $('.gameover-msg');
    
    // Declare JS Variables /////////////////////////////
    
    // Setup Scene //////////////////////////////////////
    
    function createGameMenu() {
        
    }
    
    function spawnNotifications(notificationType) {
        switch (notificationType) {
            case "hint":
            txt = "I'll give you a hint!"
            break;            
        }
    }
    
    function spawnMapLocations() {
        for (i = 0; i < 4; i++) {
            $locationBtn = $('<a>')
            .addClass('button is-link is-rounded locationBtn ' + i)
            .append($('<i>').addClass('im im-location'))
            .appendTo($gameViewport);
            
            switch(i) {
                case 0:
                $locationBtn
                .attr('href', '../htmls/puzzle' + i + '.html')
                .css({
                    'grid-column': '4 / 5',
                    'grid-row' : '4 / 5'
                });
                break;
                case 1:
                $locationBtn
                .attr('href', '../htmls/puzzle' + i + '.html')
                .css({
                    'grid-column': '6 / 7',
                    'grid-row': '5 / 6'
                });
                break;
                case 2:
                $locationBtn
                .attr('href', '../htmls/puzzle' + i + '.html')
                .css({
                    'grid-column': '8 / 9',
                    'grid-row': '6 / 7'
                });
                break;
                case 3:
                $locationBtn
                .attr('href', '../htmls/puzzle' + i + '.html')
                .css({
                    'grid-column': '3 / 4',
                    'grid-row': '7 / 8'
                });
                break;
            }
        }
    }
    
    spawnMapLocations();
    
    // $locationBtn.click(function() {
    //     window.location = "../htmls/puzzle1.html";
    // });
});