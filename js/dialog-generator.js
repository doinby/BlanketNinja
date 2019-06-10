$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $dialogContainer = $('.dialog-container');
    var $characterPortrait = $('<img>');
    var $characterName = $('<h4>');
    var $textBubble = $('<p>');
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var $currentSceneBackground;
    var chapterCount = 0;
    var sceneCount = 0;
    var character = 0;
    var dialogs;
    var Oliver = {
        name: "Oliver",
        portrait: "../images/Oliver.png",
    }
    var Remy = {
        name: "Remy",
        portrait: "../images/Remy.png",
    }
    var Kent = {
        name: "Kent",
        portrait: "../images/Kent.png",
    }
    var Maru = {
        name: "Maru",
        portrait: "../images/Maru.png",
    }
    var Mom = {
        name: "Mom",
        portrait: "../images/Mom.png",
    }
    var Dad = {
        name: "Dad",
        portrait: "../images/Dad.png",
    }
    var Grandpa = {
        name: "Grandpa",
        portrait: "../images/Grandpa.png",
    }
    var SchoolKid1 = {
        name: "School Kid 1",
        portrait: "../images/SchoolKid1.png",
    }
    var SchoolKid2 = {
        name: "School Kid 2",
        portrait: "../images/SchoolKid2.png",
    }
    var Blank = {
        name: "",
        portrait: "../images/Blank.png",
    }
    
    // Setup Scene //////////////////////////////////////
    
    // Add Dialog Container
    $dialogContainer = $('<section>')
    .addClass('dialog-container')
    .appendTo($('main'));
    
    function spawmAllImages(maxCount) {
        for (i = 0; i <= maxCount; i++) {
            var $sceneBackground = $('<img>')
            .attr('src', '../images/scenes/scene0-' + i + '.png')
            .addClass('scene-image scene0-' + i)
            .appendTo($gameViewport);
        }
    }
    
    function spawnDialogs(character, dialogs) {
        $characterPortrait
        .addClass('character-portrait')
        .attr('src', character["portrait"]);
        
        $characterName
        .addClass('character-name')
        .html(character["name"]);
        
        $textBubble
        .addClass('text-bubble')
        .html(dialogs);
        
        $dialogContainer
        .append($characterPortrait)
        .append($characterName)
        .append($textBubble);
        // .toggleClass("--dcReversed");
    }
    
    // Create Dialogs For Each Scenes
    function dialogData() {
        switch (title) {
            case "Blanket Ninja - Map":
            character = Oliver;
            dialogs = "Where should we go now, Remy?";
            spawnDialogs(character, dialogs);
            sceneCount++;
            break;
            
            case "Blanket Ninja - Template": 
            chapterCount = 0;
            spawmAllImages(0);
            switch (sceneCount) {
                case 0:
                $currentSceneBackground = $('.scene' + chapterCount + '-' + sceneCount).fadeIn("slow");
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                $dialogContainer.toggleClass("--dcReversed");
                character = "";
                dialogs = "";
                break;
                
                case 10:
                $currentSceneBackground.fadeOut("slow", function() {
                    window.location = "../htmls/map.html";
                });
                break;
                
                default:
                $currentSceneBackground.fadeOut("fast");
                $currentSceneBackground.next().fadeIn("slow");
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Intro":
            chapterCount = 0;
            spawmAllImages(4);
            switch (sceneCount) {
                case 0:
                $currentSceneBackground = $('.scene' + chapterCount + '-' + sceneCount).fadeIn("slow");
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                character = Oliver;
                dialogs = "<i>*pant* *pant*";
                break;
                
                case 2:
                character = Oliver;
                dialogs = "Remy! This way!";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Wait for me!!";
                break;
                
                case 6:
                character = Remy;
                dialogs = "Woa! That was so close. <i>*pant* *pant*";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Yeah. <i>*pant* *pant*";
                break;
                
                case 8:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Good thing we are ninjas! Haha.";
                break;
                
                case 9:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "We've got a lot of work to do. Let's go.";
                break;
                
                case 10:
                $currentSceneBackground.fadeOut("slow", function () {
                    window.location = "../htmls/map.html";
                });
                break;
                
                default:
                $currentSceneBackground.fadeOut("fast");
                $currentSceneBackground.next().fadeIn("slow");
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Local News":
            chapterCount = 1;
            spawmAllImages(4);
            switch (sceneCount) {
                case 0:
                $currentSceneBackground = $('.scene' + chapterCount + '-' + sceneCount).fadeIn("slow");
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                character = SchoolKid1;
                dialogs = "Do you think they can fly?";
                break;
                
                case 2:
                $dialogContainer.toggleClass("--dcReversed");
                character = SchoolKid2;
                dialogs = "What? No, Cal! But I bet they can hop on the roofs";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = SchoolKid1;
                dialogs = "Totally! They evade with smoke bomb and throw stars at enemy";
                break;
                
                case 4:
                $dialogContainer.toggleClass("--dcReversed");
                character = SchoolKid1;
                dialogs = "Yeah, totally! So cool!";
                break;
                
                case 6:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Woahh! We are famous now, Ol!";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Shh... Don't tell anyone about this.";
                break;
                
                case 8:
                character = Oliver;
                dialogs = "If the grump cat lady founds out we broke those plant pots yesterday, we are doomed.";
                break;
                
                case 9:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Aww...";
                break;
                
                case 10:
                character = Remy;
                dialogs = "But hey, at least we fed Little Oreo for her.";
                break;
                
                case 11:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Haha, and then he peed on the newspaper. She must be furious right now";
                break;
                
                case 12:
                $currentSceneBackground.fadeOut("slow", function() {
                    window.location = "../htmls/map.html";
                });
                break;
                
                default:
                $currentSceneBackground.fadeOut("fast");
                $currentSceneBackground.next().fadeIn("slow");
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Sick Leave":
            chapterCount = 2;
            spawmAllImages(0);
            switch (sceneCount) {
                case 0:
                $currentSceneBackground = $('.scene' + chapterCount + '-' + sceneCount).fadeIn("slow");
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                character = Kent;
                dialogs = "Emily isn't coming today";
                break;
                
                case 2:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Maybe she's sick. Emily said she felt sick yesterday and didn't eat lunch";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "She didn't even play 'Guess Who' with us. Said she would, though";
                break;
                
                case 4:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "She didn't even play 'Guess Who' with us. Said she would, though";
                break;
                
                case 5:
                $dialogContainer.toggleClass("--dcReversed");
                character = Maru;
                dialogs = "I hope she is okay.";
                break;
                
                case 6:
                $dialogContainer.toggleClass("--dcReversed");
                character = Kent;
                dialogs = "Maru, do you think we should come visit her after school?";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Yeah! Let's come visit her!";
                break;
                
                case 8:
                $dialogContainer.toggleClass("--dcReversed");
                character = Maru;
                dialogs = "I think she wouldn't mind. But we have Algebra class tomorrow. I haven't finished all of my assignments";
                break;
                
                case 9:                    
                character = Maru;
                dialogs = "But we have Algebra class tomorrow. I haven't finished all of my assignments";
                break;
                
                case 10:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "You are right. Plus we have English the day after.";
                break;
                
                case 11:
                $dialogContainer.toggleClass("--dcReversed");
                character = Kent;
                dialogs = "Let's go on Thursday afternoon then, since we get out early";
                break;
                
                case 12:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Ok.";
                break;
                
                case 13:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Sounds good.";
                break;
                
                case 14:
                $dialogContainer.toggleClass("--dcReversed");
                character = Maru;
                dialogs = "Ok. We will meet at the school gate";
                break;
                
                case 15:
                $currentSceneBackground.fadeOut("slow", function () {
                    window.location = "../htmls/chapter3.html";
                });
                break;
                
                default:
                $currentSceneBackground.fadeOut("fast");
                $currentSceneBackground.next().fadeIn("slow");
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - We Miss Him":
            chapterCount = 3;
            spawmAllImages(0);
            switch (sceneCount) {
                case 0:
                $currentSceneBackground = $('.scene' + chapterCount + '-' + sceneCount).fadeIn("slow");
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                character = Mom;
                dialogs = "Kids, remember to wash the dishes when you finish eating.";
                break;
                
                case 2:
                $dialogContainer.toggleClass("--dcReversed");
                character = Dad;
                dialogs = "Oliver, what did I tell you about leaving your veggies?";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "But I really don't like roasted pumkin. Can I put away for later?";
                break;
                
                case 4:
                $dialogContainer.toggleClass("--dcReversed");
                character = Mom;
                dialogs = "Remy ate all of them so you can, too. Now, I don't want to see any leftovers when I get back.";
                break;
                
                case 5:
                $dialogContainer.toggleClass("--dcReversed");
                character = Dad;
                dialogs = "Bye kids!";
                break;
                
                case 6:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Mom! Dad! When can we go see Grandpa?";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Dad;
                dialogs = "Oh, you will, soon. Don't worry. Right now Grandpa is a little ill. He needs time to recover.";
                break;
                
                case 8:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Please tell Grandpa we miss him a lot. And we wish him a speeeeeeeedy recovery. And, and, can we visit him this weekend?";
                break;
                
                case 9:
                $dialogContainer.toggleClass("--dcReversed");
                character = Dad;
                dialogs = "Okay. But you need to finish your homework first, alright kids?"
                break;

                case 10:
                    $dialogContainer.toggleClass("--dcReversed");
                    character = Remy;
                    dialogs = "Yes!!!"
                    break;

                case 11:
                    $dialogContainer.toggleClass("--dcReversed");
                    character = Oliver;
                    dialogs = "Okay, dad."
                    break;
                
                case 13:
                $currentSceneBackground.fadeOut("slow", function () {
                    window.location = "../htmls/challenge2.html";
                });
                break;
                
                default:
                $currentSceneBackground.fadeOut("fast");
                $currentSceneBackground.next().fadeIn("slow");
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
        }
    }
    
    $(document).mousedown(dialogData);
    
});

