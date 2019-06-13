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
    
    var MysteriousMan = {
        name: "Mysterious Man",
        portrait: "../images/MysteriousMan.png"
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
            break;
            
            case "Blanket Ninja - Map (Expert)":
            switch (sceneCount) { 
                case 0:
                // If 4 of the puzzles were completed
                if (sessionStorage.btn2 && sessionStorage.btn3) {
                    
                } else { // If 3 of the puzzles were completed                
                    character = Oliver;
                    dialogs = "Look! Remy, it's those strange flying bugs that makes the local sick.";
                }
                break;
            }
            
            spawnDialogs(character, dialogs);
            sceneCount++;
            break;
            
            case "Blanket Ninka - Memory Challenge X":
            
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
            
            case "Blanket Ninja":
            switch (sceneCount) {
                case 0:
                character = "";
                dialogs = "In an unknown town of an unknown civilization, a pair of twin ninjas have decided to become a night-time blanket hero.";
                break;
                
                case 1:
                character = "";
                dialogs = "Their mission: to keep the townies warm in their deep slumber.";
                break;
                
                case 2:
                character = "";
                dialogs = "At night, the twins will go to visit each house, retrieve the discarded blanket, and put it back on for them."
                break;
                
                case 3:
                character = "";
                dialogs = "Are you ready to start the journal?"
                $('.notification')
                .append('<a href="htmls/chapter0.html" class="button is-primary">Yes</a>')
                .toggle();
                break;
                
                case 5:
                $('.scene-image').fadeOut(2000, function () {
                    window.location = "htmls/chapter0.html";
                });
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
                character = Grandpa;
                dialogs = "There is nothing to worry about, children. They take care of me very well. Too well.";
                break;
                
                case 2:
                character = Grandpa;
                dialogs = "<strong>*COUGH* *COUGH* *COUGH*";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Oh no! Grandpa is still very sick."
                break;
                
                case 4:
                $dialogContainer.toggleClass("--dcReversed");
                character = Dad;
                dialogs = "Alright, we should let him get some rest.";
                break;
                
                case 5:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "I hope you'll get better soon and come home with us.";
                break;
                
                case 6:
                $dialogContainer.toggleClass("--dcReversed");
                character = Grandpa;
                dialogs = "I will, Oliver. Then you two can tell your old man all about those school activities you did when we get home."
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "We've got lots of stories to tell. The other day we saw..."
                break;
                
                case 8:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Remy, Dad said we need to go."
                break;
                
                case 9:
                $dialogContainer.toggleClass("--dcReversed");
                character = Dad;
                dialogs = "Say goodbye to papa, kids. Your mom is waiting at the car.";
                break;
                
                case 10:
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
                character = MysteriousMan;
                dialogs = "Hello, Little Ninjas. We meet at last.";
                break;
                
                case 2:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "You can't have these bugs";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = MysteriousMan;
                dialogs = "Why not?";
                break;
                
                case 4:
                character = MysteriousMan;
                dialogs = "They're my greatest invention. Behold, urban mutant honey bee that can produce x3 the honey.";
                break;
                
                case 5:
                character = MysteriousMan;
                dialogs = "People will never run out of honey again. Isn't it great?";
                break;
                
                case 6:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "WOW! That's great, I love honey!";
                break;
                
                case 7:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "That's not the point!";
                break;
                
                case 7:
                character = Oliver;
                dialogs = "Look, sir, we come here to let you know that the bee are spreading flu and make people really sick.";
                break;
                
                case 8:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "Our grandpa caught the flu, too. Our parents have to put him in the hosipital";
                break;
                
                case 9:
                $dialogContainer.toggleClass("--dcReversed");
                character = MysteriousMan;
                dialogs = "Oh... My... That's terrible. I had no idea!";
                break;
                
                case 10:
                character = MysteriousMan;
                dialogs = "Oh, my my my MY!";
                break;
                
                case 11:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "Sir, could you take your bee farm elsewhere? Somewhere that does not bother a lot of people?";
                break;
                
                case 12:
                $dialogContainer.toggleClass("--dcReversed");
                character = MysteriousMan;
                dialogs = "Hm... Let's see. I could move this to Honeyville where my siblings are. Yes, yes. We could farm the bees together!";
                break;
                
                case 13:
                character = MysteriousMan;
                dialogs = "Great idea, kids! And thanks for letting me know.";
                break;
                
                case 15:
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
                $dialogContainer.toggleClass("--dcReversed");
                character = Mom;
                dialogs = "Oliver! Remy! Didn't I tell you come home immediately after school?";
                break;
                
                case 2:
                $dialogContainer.toggleClass("--dcReversed");
                character = Oliver;
                dialogs = "...";
                break;
                
                case 3:
                $dialogContainer.toggleClass("--dcReversed");
                character = Remy;
                dialogs = "We can explain, mom.";
                break;
                
                case 4:
                spawnNextImage();
                break;
                
                case 5:
                $dialogContainer.toggleClass("--dcReversed");
                character = Mom;
                dialogs = "I can see you are doing all of these things out of goodwill.";
                break;
                
                case 6:
                character = Mom;
                dialogs = "But I'm still upset that you did not telll me about any of this.";
                break;

                case 7:
                    $dialogContainer.toggleClass("--dcReversed");
                    character = Oliver;
                    dialogs = "I'm sorry, mom.";
                    break;

                case 8:
                    $dialogContainer.toggleClass("--dcReversed");
                    character = Remy;
                    dialogs = "We won't do this again. I promise";
                    break;

                case 9:
                    $dialogContainer.toggleClass("--dcReversed");
                    character = Mom;
                    dialogs = "I'm glad you ";
                    break;
                
                case 20:
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

