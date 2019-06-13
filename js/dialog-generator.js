$(document).ready(function () {
    
    // Declare CSS Variables ////////////////////////////
    
    var $gameViewport = $('.game-viewport');
    var $dialogContainer = $('.dialog-container');
    var $characterPortrait = $('<img>');
    var $characterName = $('<h4>');
    var $textBubble = $('<p>');
    var $currentSceneBackground = $('.scene-image:first');
    
    // Declare JS Variables /////////////////////////////
    
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var chapterCount = 0;
    var sceneCount = 0;
    var indexCount = 0;
    var character = 0;
    var maxCount;
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
    var Emily = {
        name: "Emily",
        portrait: "../images/Emily.png",
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
            $sceneBackground = $('<img>')
            .attr({
                src: '../images/scenes/scene' + chapterCount + '-' + i + '.png'
            })
            .addClass('scene-image scene0-' + i)
            .appendTo($gameViewport);
        }
        $('.scene-image:first').fadeIn("slow");
    }
    
    function spawnNextImage() {
        $('.scene' + chapterCount + '-' + indexCount).fadeOut("fast");
        $('.scene' + chapterCount + '-' + indexCount).next().fadeIn("slow");
        indexCount++;
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
    }
    
    // Create Dialogs For Each Chapter
    function dialogData() {
        switch (title) {
            case "Blanket Ninja - Map":
            character = Oliver;
            dialogs = "Where should we go now, Remy?";
            spawnDialogs(character, dialogs);
            sceneCount++;
            break;
            
            case "Blanket Ninka - Memory Challenge X":
            character = Remy;
            
            break;
            
            case "Blanket Ninja - Template": 
            chapterCount = 1;
            switch (sceneCount) {
                case 0:
                spawmAllImages(3);
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                spawnNextImage();
                $dialogContainer.toggleClass("--dcReversed");
                character = "";
                dialogs = "";
                break;
                
                case 10:
                $('.scene-image').fadeOut(2000, function () {
                    window.location = "../htmls/map.html";
                });
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Intro": //chapter 0
            switch (sceneCount) {
                case 0:
                spawmAllImages(3);
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                character = Oliver;
                dialogs = "<i>*pant* *pant*";
                break;
                
                case 2: 
                spawnNextImage();
                character = Oliver;
                dialogs = "Remy! This way!";
                break;
                
                case 3:
                spawnNextImage();
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Wait for me!!";
                break;
                
                case 4:
                spawnNextImage();
                character = Remy;
                dialogs = "Woa! That was so close. <i>*pant* *pant*";
                break;
                
                case 5:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Yeah. <i>*pant* *pant*";
                break;
                
                case 6:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Good thing we are ninjas! Haha.";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "We've got a lot of work to do. Let's go.";
                break;
                
                case 8:
                $('.scene-image').fadeOut(2000, function() {
                    window.location = "../htmls/map.html";
                });                
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Local News":
            chapterCount = 1; // Chapter 1
            switch (sceneCount) {
                case 0:
                spawmAllImages(0);
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
                $('.scene-image').fadeOut(2000, function() {
                    window.location = "../htmls/map.html";
                });
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Sick Leave":
            chapterCount = 2; // Chapter 2
            switch (sceneCount) {
                case 0:
                spawmAllImages(0);
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
                $('.scene-image').fadeOut(2000, function () {
                    window.location = "../htmls/challenge5.html";
                });
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - We Miss Him":
            chapterCount = 3;
            switch (sceneCount) {
                case 0:
                spawmAllImages(0);
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
                dialogs = "Mom! Dad! When can we go see grandpa?";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Dad;
                dialogs = "Oh, you will, soon. Don't worry. Right now grandpa is a little ill. He needs time to recover.";
                break;
                
                case 8:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Please tell grandpa we miss him a lot. And we wish him a speeeeeeeedy recovery. And, and, can we visit him this weekend?";
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
                $('.scene-image').fadeOut(2000, function () {
                    window.location = "../htmls/challenge8.html";
                });
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Found the Suspect":
            chapterCount = 4;
            switch (sceneCount) {
                case 0:
                spawmAllImages(3);
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Emmmm!!! You're not going to believe this!";
                break;
                
                case 2:
                character = Remy;
                dialogs = "We know the thing that causes everyone to get sick!!!";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = Kent;
                dialogs = "There are strange bugs that drop dust all over the town.";
                break;
                
                case 4:
                character = Kent;
                dialogs = "Maybe they are the agent that carry flu bateria to the town";
                break;
                
                case 5:
                $dialogContainer.toggleClass("--dcReversed");
                character = Maru;
                dialogs = "Oh no! I'm starting to feel a bit dizzy. Did I catch the flu from those weird bugs?";
                break;
                
                case 6:
                $dialogContainer.toggleClass("--dcReversed");
                character = Emily;
                dialogs = "I had a similar theory as well. I passed by the hive on my way to school. Instantly got sick";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "You should stay home.";
                break;
                
                case 8:
                $dialogContainer.toggleClass("--dcReversed");
                character = Maru;
                dialogs = "Yeah, just stay put. We will talk to the adults and figure something out";
                break;
                
                case 9:
                $dialogContainer.toggleClass("--dcReversed");
                character = Emily;
                dialogs = "I couldn't go even if I wanted to.";
                break;
                
                case 10:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Don't worry, we will update you on the findings.";
                break;
                
                case 11:
                character = Oliver;
                dialogs = "My grandpa is sick, too. We'd really like to help.";
                break;
                
                case 12:
                $dialogContainer.toggleClass("--dcReversed");
                character = Emily;
                dialogs = "Thank you for coming, everyone.";
                break;
                
                case 13:
                $('.scene-image').fadeOut(2000, function () {
                    window.location = "../htmls/map-expert.html";
                });
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Grounded":
            chapterCount = 5;
            switch (sceneCount) {
                case 0:
                spawmAllImages(3);
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                character = Mom;
                dialogs = "What have you boys been up to at night?";
                break;
                
                case 2:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "N... Nothing. We stayed up to watch streamed videos";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = Mom;
                dialogs = "Ms. Haley called me today. She said she'd caught you boys sleeping in class sometimes";
                break;
                
                case 4:
                character = Mom;
                dialogs = "Tell me the truth. Why are you up so late at night?";
                break;
                
                case 5:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Sorry, mom. There were a couple of American streamers who stream late. We forgot it was bed time and then...";
                break;
                
                case 6:
                character = Oliver;
                dialogs = "It... it won't happend again, I promise!";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Mom;
                dialogs = "Remember your bed time is at 10:30. I will check up on you boys tonight";
                break;
                
                case 8:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Yes, mom!";
                break;
                
                case 9:
                $dialogContainer.toggleClass("--dcReversed");
                character = Mom;
                dialogs = "You are grounded until next month. No wandering about after school.";
                break;
                
                case 11:
                character = Oliver;
                dialogs = "Remy, wake up.";
                break;
                
                case 12:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Hmm...?";
                
                case 13:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Keep it down. Let's go";
                
                case 14:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "But mom and dad would hear us.";
                
                case 15:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "We can get out through the roof. I know the way.";
                
                case 16:
                $('.scene-image').fadeOut(2000, function () {
                    window.location = "../htmls/challenge10.html";
                });
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;            
            
            case "Blanket Ninja - Hospital Visit":
            chapterCount = 6;
            switch (sceneCount) {
                case 0:
                spawmAllImages(3);
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                character = Granpa;
                dialogs = "I'm fine, my dear child. There is nothing to worry about.";
                break;
                
                case 2:
                character = Granpa;
                dialogs = "<strong>COUGH COUGH COUGH";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "No!!! Grandpa!!!"
                break;
                
                case 4:
                $dialogContainer.toggleClass("--dcReversed");
                character = Dad;
                dialogs = "Alright, we should let him get some rest.";
                break;
                
                case 5:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "I hope you'll get better soon to come home with us.";
                break;
                
                case 6:
                $dialogContainer.toggleClass("--dcReversed");
                character = Granpa;
                dialogs = ""
                break;
                
                case 20:
                $('.scene-image').fadeOut(2000, function () {
                    window.location = "../htmls/map-expert.html";
                });
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Message":
            chapterCount = 7;
            switch (sceneCount) {
                case 0:
                spawmAllImages(3);
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                spawnNextImage();
                $dialogContainer.toggleClass("--dcReversed");
                character = "";
                dialogs = "";
                break;
                
                case 10:
                $('.scene-image').fadeOut(2000, function () {
                    window.location = "../htmls/chapter8.html";
                });
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Confession":
            chapterCount = 8;
            switch (sceneCount) {
                case 0:
                spawmAllImages(3);
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                spawnNextImage();
                $dialogContainer.toggleClass("--dcReversed");
                character = "";
                dialogs = "";
                break;
                
                case 10:
                $('.scene-image').fadeOut(2000, function () {
                    window.location = "../htmls/chapter9.html";
                });
                break;
                
                default:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
            
            case "Blanket Ninja - Epilouge":
            chapterCount = 9;
            switch (sceneCount) {
                case 0:
                spawmAllImages(3);
                dialogs = "";
                $textBubble.toggle();
                break;
                
                case 1:
                $textBubble.toggle();
                spawnNextImage();
                $dialogContainer.toggleClass("--dcReversed");
                character = "";
                dialogs = "";
                break;
                
                case 10:
                spawnNextImage();
                break;
            }
            sceneCount++;
            spawnDialogs(character, dialogs);
            break;
        }
    }
    
    $(document).mousedown(dialogData);    
});

