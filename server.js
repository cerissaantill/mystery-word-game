'use strict';

window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var categories;         // Array of topics
    var chosenCategory;     // Selected category
    var getHint ;           // Word getHint
    var word ;              // Selected word
    var guess ;             // Guess
    var geusses = [ ];      // Stored guesses
    var lives ;             // Lives
    var counter ;           // Count correct guesses
    var space;              // Number of spaces in word '-'

    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scategory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");


// Creating alphabet ul
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    };


    // Select Category
    var selectCat = function () {
        if (chosenCategory === categories[0]) {
            catagoryName.innerHTML = "Your chosen category is NBA Teams";
        } else if (chosenCategory === categories[1]) {
            catagoryName.innerHTML = "Your chosen category is Music";
        } else if (chosenCategory === categories[2]) {
            catagoryName.innerHTML = "Your chosen category is Cities";
        }
    };


    // Create guesses ul
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

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
    comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    }

    // Animate man
    var animate = function () {
        var drawMe = lives ;
        drawArray[drawMe]();
    }


