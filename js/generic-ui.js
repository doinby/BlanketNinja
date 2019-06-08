
$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $notification = $('#notification').addClass('--isHidden');
    var $notificationHeader = $('<h2>').css('text-align', 'center');
    var $notificationText = $('<p>').css('text-align', 'left');
    var $locationBtn;
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var showHintBtn = false;
    
    // Setup Scene //////////////////////////////////////
    
    function spawnUI() {
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

        // Add Hint Button
        if (showHintBtn) {
            $hintBtn = $('<a>')
            .addClass('button hint-btn is-primary is-invered is-outlined')
            .appendTo($gameViewport)
            // .attr('disabled', 'disabled')
            .click(function () {
                spawnNotifications("Hint");
            })
            .text("Hint");
        }
    }
    
    function spawnNotifications(notificationType) {
        switch (notificationType) {
            case "Menu":
            $notification
            .appendTo($gameViewport)
            .toggle();            
            break;
            
            case "Hint":
            $notificationHeader.text(notificationType);
            $notificationText.text("Here is a hint.");
            $notification
            .append($notificationHeader)
            .append($notificationText)
            .toggle();
            break;    
        }
    }
    
    function spawnMapLocations() {        
        for (i = 0; i < 4; i++) {
            $locationBtn = $('<a>')
            .addClass('button is-primary is-rounded locationBtn' + i)
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
            // .removeClass('is-primary')
            .addClass('is-light');
        }
        else {
            $locationBtn
            .attr('href', '../htmls/chapter2-' + x + '.html');
        }
    }
    
    switch (title) {
        case "Blanket Ninja - Map":
        spawnUI();
        spawnMapLocations();
        break;
        
        case "Blanket Ninja - Puzzle X":
        showHintBtn = true;
        spawnUI();
        break;
        
        case "Blanket Ninja - Puzzle Y":
        showHintBtn = true;
        spawnUI();
        break;
    }
});