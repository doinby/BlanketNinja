$(document).ready(function () {
    var $gameViewport = $('.game-viewport');
    var $backgroundImage = $('.background-image');
    var $dialogContainer = $('<li>').addClass('dialog-container');
    var $characterPortraitContainer = $('<div>').addClass('character-portrait-container');
    var $characterPortrait = $('<img>').addClass('character-portrait');
    var $dialogBubble = $('<div>').addClass('dialog-bubble');

    var currentPage;

    $backgroundImage.fadeIn("slow");

    function updateCurrentPage(pageNumber) {
        currentPage = pageNumber;
        console.log(currentPage);
    }

    function appendDialog () { 
    }
    
    $gameViewport.bind('scroll', function () {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            console.log("reaches the bottom!")
        }
    });
    
    // appendDialogContainer();
    updateCurrentPage(0);
});