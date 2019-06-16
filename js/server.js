'use strict';

window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var categories;         // Array of topics
    var chosenCategory;     // Selected category
    // var getHint ;           // Word getHint
    var word ;              // Selected word
    var guess ;             // Guess
    var guesses = [ ];      // Stored guesses array
    var lives ;             // Lives
    var counter ;           // Correct guess counter
    var space;              // Number of spaces in word '-'


    // Get elements
    var showLives = document.getElementById("myLives");
    var showCatagory = document.getElementById("showCategory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");


    // Creating alphabet ul
    var buttons = function () {
        var myButtons = document.getElementById('buttons');
        var letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            var list = document.createElement('li')
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Select Category
    var selectCat = function () {
        if (chosenCategory === categories[0]) {
            categoryName.innerHTML = "Your chosen category is NBA Teams";
        } else if (chosenCategory === categories[1]) {
            categoryName.innerHTML = "Your chosen category is Movies";
        } else if (chosenCategory === categories[2]) {
            categoryName.innerHTML = "Your chosen category is Cities";
        }
    }


    // Create guesses ul
    var result = function () {
       var wordHolder = document.getElementById('hold');
        var correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }


    // Show lives
    var comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    };


    // Animate man
    var animate = function () {
        var drawMe = lives ;
        drawArray[drawMe]();
    }


    // Hangman
    var canvas =  function(){
        var myStickman = document.getElementById("stickman");
        var context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };

   var head = function(){
        var myStickman = document.getElementById("stickman");
        var context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
    };

    var draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    };


    var frame1 = function() {
        draw (0, 150, 150, 150);
    };

    var frame2 = function() {
        draw (10, 0, 10, 600);
    };

    var frame3 = function() {
        draw (0, 5, 70, 5);
    };

    var frame4 = function() {
        draw (60, 5, 60, 15);
    };

   var torso = function() {
        draw (60, 36, 60, 70);
    };

    var rightArm = function() {
        draw (60, 46, 100, 50);
    };

    var leftArm = function() {
        draw (60, 46, 20, 50);
    };

    var rightLeg = function() {
        draw (60, 70, 100, 100);
    };

    var leftLeg = function() {
        draw (60, 70, 20, 100);
    };

    var drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];



    // OnClick Function
    var check = function () {
        list.onclick = function () {
            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
                animate();
            } else {
                comments();
            }
        }
    };


    // Play
    play = function () {
        categories = [
            ["spurs", "lakers", "knickerbockers", "pelicans", "jazz", "trailblazers", "nuggets"],
            ["bridesmaids", "the godfather", "titanic", "caddy shack", "jaws"],
            ["san antonio", "new orleans", "hanalei", "edinburgh", "santa barbara"]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guesses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    };

    play();


    // Hint

    hint.onclick = function() {

        var hints = [
            ["Based in Texas", "Based in California", "Based in NY", "Based in LA", "Based in Utah, but shouldn't be", "Based in Oregon", "Based in Colorado"],
            ["I'm rrready to parrrtyy", "I'll make him an offer he can't refuse", "Historical drama about an ocean liner", "Golf comedy", "Giant great white shark"],
            ["The Spurs", "The Big Easy", "Puff the Magic Dragon", "Fringe Fest", "Best airport ever"]
        ];

        var categoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "Clue: - " +  hints [categoryIndex][hintIndex];
    };


    // Reset

    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
    }
};


