$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    // var $notification = $('#notification').addClass('--isHidden');
    // var $notificationHeader = $('<p>').css('text-align', 'center');
    // var $notificationText = $('<p>').css('text-align', 'left');
    var $warningText = $('<h3>').addClass('warning-text');
    var $locationBtn;
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var showHintBtn = false;
    var defaultNum = 1;
    
    // Setup Scene //////////////////////////////////////
    
    // Add Menu Button
    $menuIcon = $('<i>')
    .addClass('im im-menu');   
    $menuBtn = $('<a>')
    .addClass('button menu-btn is-primary is-invered is-outlined')
    .append($menuIcon)
    .appendTo($gameViewport)
    .click(function() {
        $('#menu').toggle();
    });
    
    // Add Menu Popup
    $instruction = $('<li>')
    .append('<p>To solve puzzle:</p>')
    .append('<h3>CLICK</h3>')
    .append('<p>or</p>')
    .append('<h3>DRAG</h3>')
    .append('<p>on items</p>');
    
    $muteBtn = $('<li>')
    .addClass('button is-primary')
    .append('<i class="im im-volume"></i>')
    .append('<i class="im im-volume-off" style="display: none;"></i>')
    .attr('id', 'mute-button')
    .click(function () {
        $(this)
        .children()
        .toggle();
        $(this).toggleClass('is-danger')
    });;
    
    $menuContainer = $('<ul>')
    .addClass('has-background-light --flex')
    .append($instruction)
    .append($muteBtn)
    .appendTo($gameViewport)
    .attr('id', 'menu');
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function spawnMapUI(max) {        
        for (i = 0; i <= max; i++) {
            $locationBtn = $('<a>')
            .addClass('button is-primary is-rounded locationBtn' + i)
            .append($('<i>').addClass('im im-location'))
            .appendTo($gameViewport);
            
            // Allocate Location Buttons on Map
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
                
                case 4:
                checkDisabledBtn(i);
                $locationBtn
                .click(function () {
                    sessionStorage.btn4 = "disabled";
                })
                .css({
                    'grid-column': '2 / 3',
                    'grid-row': '5 / 6'
                });
                break;
            }
        }
        $warningText
        .appendTo($gameViewport)
        .text("Choose A Location on the Map");
    }
    
    function spawnMutantBees(x) {
        for(i = 0; i < x; i++) {
            
            $mutantBee = $('<img>')
            .addClass('mutant-bees')
            .attr('src', '../images/mutantBees.png')
            .appendTo($gameViewport)
            .css({
                top: getRandomNumber(50, 550),
                right: getRandomNumber(-500, 50)
            })
            .animate({
                top: getRandomNumber(50, 550),
                right: getRandomNumber(1024, 1500)
            },5000, "linear");
        }
    }
    
    function checkDisabledBtn(x) {
        var isDisabled = [
            sessionStorage.btn0,
            sessionStorage.btn1,
            sessionStorage.btn2,
            sessionStorage.btn3
        ]
        
        if (isDisabled[x]) {
            $locationBtn
            .attr('disabled', 'disabled')
            .toggleClass('is-primary is-dark')
            .addClass('is-light');
        }
        else {
            $locationBtn
            .attr('href', '../htmls/challenge' + x + '.html');
        }
    }
    
    switch (title) {
        case "Blanket Ninja - Map":    
        // Spawn Easy Puzzles For Beginner        
        if (sessionStorage.btn0) {
            spawnMapUI(1);
        } else {
            spawnMapUI(0);            
        }
        break;
        
        case "Blanket Ninja - Map (Expert)":
        // If all the puzzles were solved, spawn boss puzzle
        if (sessionStorage.btn2 && sessionStorage.btn3) {
            spawnMapUI(4)
        } else {  // Spawn all puzzles                  
            spawnMapUI(3);
            } 
            spawnMutantBees(getRandomNumber(3, 7));
        update = setInterval(function() {
            spawnMutantBees(getRandomNumber(1, 5));
        }, 4000);
        break;
    }
});